import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './Components/NavbarComp.js';
import Home from './Components/Home';
import PaymentGateways from './Components/PaymentGateways';
{/*import CheckStatusComp from './Components/CheckStatusComp';
import RegistrationComp from './Components/RegistrationComp';
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";
import FooterComp from './Components/FooterComp';*/}
function App() {
  return (
    <div>
      <Home/>
      {/*
      <Home/>
     
      <CheckStatusComp/>
       <RegistrationComp/>
  */}
      </div>
  );
}

export default App;
