import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

const EnrollCheckout = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState("");
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const { courseId } = useParams();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);

    if (!stripe || !elements) return;

    try {
      // Step 1: Get client secret
      const res = await axios.post(
        "http://localhost:4000/api/v1/payment/create-payment-intent",
        {
          amount: course.price,
        }
      );

      const clientSecret = res.data.clientSecret;

      // Step 2: Confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        // ✅ Step 3: Save order to DB
        await axios.post(
          `http://localhost:4000/api/v1/order/${courseId}`,
          {},
          { withCredentials: true }
        );

        toast.success("Payment successful! 🎉 ");
        navigate("/course");
      }
    } catch (err) {
      setError("Payment failed. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  // courseDetails
  const coursedetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/course/${courseId}`
      );
      setCourse(response.data.course);
    } catch (error) {
      console.log(error.response || error.response.data);
    }
  };
  const [alreadyPurchased, setAlreadyPurchased] = useState(false);

  // Check if already purchased
  const checkPurchaseStatus = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/order/check/${courseId}`,
        { withCredentials: true } // 🔐 in case you're using cookies/session
      );
      setAlreadyPurchased(res.data.purchased);
    } catch (err) {
      console.error("Check error", err);
    }
  };

  useEffect(() => {
    coursedetails();
    checkPurchaseStatus();
  }, [courseId]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-900 to-blue-950 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Page Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-400">
            Course Enrollment
          </h2>
          <p className="text-zinc-400">
            Complete your enrollment and checkout below
          </p>
        </div>

        {/* Course Info */}
        <div className="bg-zinc-800 rounded-xl p-6 shadow-md space-y-2">
          <h3 className="text-xl font-semibold text-orange-400">
            {course.title}
          </h3>
          <p className="text-zinc-300">{course.description}</p>
          <div className="flex justify-between mt-4">
            <span className="text-lg">Price:</span>
            <span className="text-green-400 font-bold">${course.price}</span>
          </div>
        </div>

        {alreadyPurchased ? (
          <div className="text-center text-yellow-400 bg-zinc-800 p-4 rounded-xl">
            <p className="text-xl font-bold">
              ✅ You already purchased this course!
            </p>
            <Link
              to="/course"
              className="inline-block mt-4 text-sm text-green-400 hover:underline"
            >
              Go to My Courses →
            </Link>
          </div>
        ) : (
          // show payment form here
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-800 p-6 rounded-xl space-y-4 shadow-md"
          >
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#ffffff",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#ff6b6b",
                  },
                },
              }}
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={!stripe || processing}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg"
            >
              {processing ? "Processing..." : "Pay Now"}
            </button>
          </form>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4">
          <Link
            to="/course"
            className="text-sm text-zinc-400 hover:text-orange-300 transition"
          >
            ← Back to Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnrollCheckout;
