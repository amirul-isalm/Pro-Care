
import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../Context/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading,admin } = useAuth();
  if (isLoading) {
    return (
      <div className="d-flex mt-5 justify-content-center">
        <Spinner animation="border" />;
      </div>
    );
  }
  if (!admin) {

   return <Spinner animation="border" />
    
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (user.email && admin) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
