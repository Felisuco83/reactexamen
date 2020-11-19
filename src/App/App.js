import Router from "./../components/Router";
import logo from "./../logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <div className="App">
            {/* AQUI EL MENU VA DENTRO DE ROUTER */}
            
      <Router />
          
    </div>
  );
}
export default App;
