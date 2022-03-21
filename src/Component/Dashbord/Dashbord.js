import React, { useState } from "react";
import useAuth from "../Context/useAuth";
import Footer from "../Footer/Footer";
import Navigation from "../NavigationBar/Navigation";
import { Col, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Dashbord.css";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import DashbordHome from "./DashbordHome";
import MyAppoinment from "./MyAppoinment";
import AllAppoinment from "./AllAppoinment";
import AllFeedbackPage from "./AllFeedbackPage";
import MakeAdmin from "./MakeAdmin";
import AddDoctor from "./AddDoctor";
import AdminRoute from "../PrivetRouteAndAdminRoute/AdminRoute";

const Dashbord = () => {
  let { path, url } = useRouteMatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { user, admin } = useAuth();
  console.log(admin);

  const handelShow = () => setShow(true);
  const history = useHistory();

  return (
    <>
      <Navigation />

      <div>
        <Offcanvas
          className="DashbordOffCnavas"
          show={show}
          onHide={handleClose}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title to="/" onClick={handleClose} as={Link}>
              {" "}
              <img
                height="50"
                src="https://i.ibb.co/WDV1Qww/procare-LOgo-removebg-preview-removebg-preview-removebg-preview.png"
                alt=""
              />{" "}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className=" sidebar">
              <Link to={`${url}`}></Link>
              <Link onClick={handleClose} to={`${url}/my-appoinment`}>
                <span>My Appoinment</span>
              </Link>
              {admin && (
                <>
                  <Link onClick={handleClose} to={`${url}/all-appoinment`}>
                    <span>All Appoinment</span>
                  </Link>
                  <Link onClick={handleClose} to={`${url}/all-feedback`}>
                    <span>All Feedback</span>
                  </Link>
                  <Link onClick={handleClose} to={`${url}/make-admin`}>
                    <span>Make Admin</span>
                  </Link>
                  <Link onClick={handleClose} to={`${url}/add-doctor`}>
                    <span>Add Doctor</span>
                  </Link>
                </>
              )}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div>
        <span onClick={handelShow} className="cousotomNavIcon ms-2 mt-3">
          <img
            src="https://i.ibb.co/xMZFpJ3/download-removebg-preview.png"
            alt=""
          />
        </span>
        {/*                 





dashbor start here

                 */}

        <Row className="display100vh">
          <Col className="d-none  d-lg-block" md={3} lg={3}>
            <div className="p-4 bg-info h-100 ">
              <Link to={`${url}`}></Link>
              <Link to={`${url}/my-appoinment`}>
                <span>My Appoinment</span>
              </Link>
             {admin && (
                  <>  <Link to={`${url}/all-appoinment`}>
                <span>All Appoinment</span>
              </Link>

              <Link to={`${url}/all-feedback`}>
                <span>All Feedback</span>
              </Link>

              <Link to={`${url}/make-admin`}>
                <span>Make Admin</span>
              </Link>
              <Link to={`${url}/add-doctor`}>
                <span>Add Doctor</span>
              </Link>  </>
                )}
            </div>
          </Col>
          <Col sm={12} md={12} lg={9}>
            <div className="p-4">
              <Switch>
                <Route exact path={`${path}`}>
                  <DashbordHome />
                </Route>

               
                    <Route path={`${path}/my-appoinment`}>
                      <MyAppoinment />
                    </Route>
                    <AdminRoute path={`${path}/all-appoinment`}>
                      <AllAppoinment />
                    </AdminRoute>
                    <AdminRoute path={`${path}/all-feedback`}>
                      <AllFeedbackPage />
                    </AdminRoute>
                    <AdminRoute path={`${path}/make-admin`}>
                      <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/add-doctor`}>
                      <AddDoctor />
                    </AdminRoute>
                
              </Switch>
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default Dashbord;
