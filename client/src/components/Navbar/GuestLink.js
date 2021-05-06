import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";

const GuestLink = () => {
  return (
    <>
      <Navbar.Text>
        <Button>
          <Link to="/login">Login</Link>
        </Button>
      </Navbar.Text>
      <Navbar.Text>
        <Button>
          <Link to="/register"> Register</Link>
        </Button>
      </Navbar.Text>
    </>
  );
};

export default GuestLink;
