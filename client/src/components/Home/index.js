import React from "react";
import Navbar from "../Navbar/index";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <h1>Welcome to Authentification Workshop </h1>
        <p>
          This is a simple workshop about how to handle authentification in MERN
          STACK
        </p>
      </div>
    </div>
  );
};

export default Home;
