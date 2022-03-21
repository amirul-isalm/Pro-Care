import "./App.css";
import { Button, Col, Row } from "react-bootstrap";
import Navigation from "./Component/NavigationBar/Navigation";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./Component/LoginAndSingup/Login";
import SignUp from "./Component/LoginAndSingup/SignUp";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import DoctorDetails from "./Component/Doctors/DoctorDetails";
import SeeAllDoctor from "./Component/Doctors/SeeAllDoctor";
import SeeAllTest from "./Component/AllTest/SeeAllTest";
import AuthProvider from "./Component/Context/AuthProvider";
import PrivetRoute from "./Component/PrivetRouteAndAdminRoute/PrivetRoute";
import Dashbord from "./Component/Dashbord/Dashbord";
import NotFound from "./Component/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          {/* <Navigation /> */}

          <Switch>
            <Route exact path="/">
              <Home />{" "}
            </Route>

            <Route path="/login">
              <Login />{" "}
            </Route>

            <Route path="/all-doctor">
              <SeeAllDoctor />{" "}
            </Route>

            <Route path="/all-serviece">
              <SeeAllTest />{" "}
            </Route>

            <PrivetRoute path="/doctor/:id">
              <DoctorDetails />{" "}
            </PrivetRoute>

            <PrivetRoute path="/dashbord">
              <Dashbord />{" "}
            </PrivetRoute>

            <Route path="/signup">
              <SignUp />{" "}
            </Route>
            <Route path="*">
              <NotFound />{" "}
            </Route>
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
