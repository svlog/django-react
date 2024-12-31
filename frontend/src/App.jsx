import "./App.css";
import RoutesConfig from "./routes/RoutesConfig";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <RoutesConfig />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
