import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import About from "./components/About";
import Topbar from './components/Topbar';
import ContactForm from "./components/Contact";
import Homescreen from "./Screen/Homescreen";
import CartScreen from "./Screen/cartScreen";
import Registe from "./Screen/Register";
import Login from "./Screen/Login";
function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar/>

<Switch>
  <Route path="/about" component={About} ></Route>


  <Route path="/login" component={Login} ></Route>
  <Route path="/register" component={Registe}></Route>
  <Route path="/" component={Homescreen}  exact></Route>
  <Route path="/cart"  component={CartScreen}></Route>


   </Switch>
    </BrowserRouter>  

    </>
  );
}

export default App;
