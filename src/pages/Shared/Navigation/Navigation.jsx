import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaCircleUser } from "react-icons/fa6";

const Navigation = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(user);

  const handleSignOut = ()=>{
    return signOutUser()
    .then(()=>console.log('user sign out'))
    .catch(error => console.error(error.message))
  }
  return (
    <Container className="my-3">
      <Navbar collapseOnSelect expand="lg" className="mx-auto">
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex align-items-center mx-0"
        >
          <Nav className="mx-auto gap-3 ">
            <Link className="text-decoration-none" to="/">
              Home
            </Link>
            <Link className="text-decoration-none" href="#pricing">
              About
            </Link>
            <Link className="text-decoration-none" href="#pricing">
              Career
            </Link>
          </Nav>
          <Nav className="gap-2">
            {user ? (
              <>
                <Link className="text-decoration-none">
                  <FaCircleUser className="fs-3" />
                </Link>
                <Link onClick={handleSignOut} className="text-decoration-none" to="/login">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="text-decoration-none" to="/login">
                  Login
                </Link>
                <Link className="text-decoration-none" to="/register">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
