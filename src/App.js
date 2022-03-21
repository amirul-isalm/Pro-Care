
import './App.css';
import { Button, Col, Row } from 'react-bootstrap';
import Navigation from './Component/NavigationBar/Navigation';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Component/LoginAndSingup/Login';
import SignUp from './Component/LoginAndSingup/SignUp';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navigation /> */}

        <Switch>
          <Route exact path="/" >
            <Home/>          </Route>
        </Switch>
        <Switch>
          <Route path="/login">
            <Login />{" "}
          </Route>
        </Switch>
        <Switch>
          <Route path="/signup">
            <SignUp />{" "}
          </Route>
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
