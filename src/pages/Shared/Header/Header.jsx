import React from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import moment from "moment";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <Container className="my-3">
      {/* <Navigation/> */}
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <span>{moment().format("dddd, MMMM D, YYYY")}</span>
      </div>
    </Container>
  );
};

export default Header;
