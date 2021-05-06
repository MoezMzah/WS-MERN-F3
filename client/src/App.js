import "./App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/AuthForms/Register";
import Login from "./components/AuthForms/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoute";
import { getAuthUser } from "./js/actions/AuthActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
   localStorage.getItem("token") && dispatch(getAuthUser());
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
