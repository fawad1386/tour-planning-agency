import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './Components/NavbarComp.js';
import Home from './Components/Home';
import CheckStatusComp from './Components/CheckStatusComp';
import RegistrationComp from './Components/RegistrationComp';
function App() {
  return (
    <div>
      <NavbarComp/>
      <Home/>
      {/*
      <CheckStatusComp/>
       <RegistrationComp/>
  */}
      </div>
  );
}

export default App;
