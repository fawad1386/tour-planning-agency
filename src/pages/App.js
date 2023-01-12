import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AddOrEditDetails from "./pages/AddOrEditDetails";
import LogIn from "./pages/LogIn";
import Description from "./pages/Description";
import CheckStatus from "./pages/CheckStatus";
import PaymentGateways from "./pages/PaymentGateways";
import Registrartion from "./pages/Registrartion";
import Home from "./pages/Home";
import { useEffect } from "react";
import AdminPortal from "./AdminPortal";
import AddNew from "./AddNew";
import About from "./About"
import TouristsList from "./pages/TouristsList";
import Messages from "./pages/Messages";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/description":
        title = "";
        metaDescription = "";
        break;
      case "/check-status":
        title = "";
        metaDescription = "";
        break;
      case "/payment-gateways":
        title = "";
        metaDescription = "";
        break;
      case "/registrartion":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/Admin-Portal":
        title = "";
        metaDescription = "";
        break;
      case "/edit-details":
        title="";
        metaDescription="";
      case "/Add-New-Tour":
        title="";
        metaDescription="";
      break;  
      case "/about":
        title="";
        metaDescription="";
      break; 
      case "/Tourist-List":
        title = "";
        metaDescription = "";
        break; 
      case "/messages":
        title = "";
        metaDescription = "";
        break; 
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      
      <Route path="/edit-details" element={<AddOrEditDetails />} />

      <Route path="/log-in" element={<LogIn />} />

      <Route path="/description" element={<Description />} />

      <Route path="/check-status" element={<CheckStatus />} />

      <Route path="/payment-gateways" element={<PaymentGateways />} />

      <Route path="/Admin-Portal" element={<AdminPortal />} />

      <Route path="/registrartion" element={<Registrartion />} />

      <Route path="/Add-New-Tour" element={<AddNew />} />

      <Route path="/Tourist-List" element={<TouristsList />} />

      <Route path="/messages" element={<Messgaes />} />

      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default App;
