import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/authSlice";
import Routers from "./routes/Route";
const App = () => {
  const stripePromise = loadStripe(
    "pk_test_51RcNMHPoR2woiXJ5qCVi7WJb42Sg8m2CQsljn3s8Ow8Ao9UAzIpkSGyjmmiCozHWcEleaVumi2vGwEA6F8iDZ2Ya00JPBhTUIv"
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const token = document.cookie.includes("token");
    if (!token) return;
    const getUser = async () => {
      // const dispatch = useDispatch();
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/user",
          {
            withCredentials: true,
          }
        );
        const data = response.data; // ✅ correct way to access response data
        dispatch(setUser(data));
      } catch (error) {
        console.log("Error", error?.response?.data?.message || error.message);
      }
    };
    getUser();
  }, [dispatch]);
  return (
    <>
      <Elements stripe={stripePromise}>
        <Routers />
        {/* <Toaster /> */}
        <Toaster
          toastOptions={{
            style: {
              background: "#18181B", // bg-zinc-900
              color: "#fff", // text-white
              fontSize: "14px",
              border: "1px solid #4ade80", // border-green-400
            },
            success: {
              iconTheme: {
                primary: "#22c55e", // green-500
                secondary: "#1e293b", // zinc-800
              },
            },
            error: {
              iconTheme: {
                primary: "#f97316", // orange-500
                secondary: "#1e293b",
              },
            },
          }}
        />
      </Elements>
    </>
  );
};

export default App;
