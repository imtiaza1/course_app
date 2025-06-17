import { Toaster } from "react-hot-toast";
import Routers from "./routes/Route";
const App = () => {
  return (
    <>
      <Routers />
      <Toaster />
    </>
  );
};

export default App;
