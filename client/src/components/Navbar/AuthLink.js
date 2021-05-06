import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../js/actions/AuthActions";

const AuthLink = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar variant="dark">
        <Navbar.Brand>
          <Link to="/home">AuthApp </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <Link to="/login">
              {user.name} {user.lastName}
            </Link>
          </Navbar.Text>
          <Button
            onClick={() => dispatch(logout())}
            variant="danger"
            className="m-2"
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AuthLink;
