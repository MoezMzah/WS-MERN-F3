import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const isAuth = useSelector((state) => state.isAuth);
  const isLoading = useSelector((state) => state.isLoading);
  if (isLoading) {
   return <h1>Please wait....</h1>;
  }
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return <Route component={Component} path={path} {...rest} />;
};

export default PrivateRoute;
