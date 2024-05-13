import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import bg from "../../../assets/bg.png";
import "./RightNav.css";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Row>
        <Col>
          <Button
            className="fs-5"
            variant="outline-primary"
            style={{ width: "100%" }}
          >
            <IoLogoGoogle style={{ fontSize: "30px" }} />
            Login with Google
          </Button>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="mt-2">
          <Button
            className="fs-5"
            variant="outline-secondary"
            style={{ width: "100%" }}
          >
            <BsGithub style={{ fontSize: "30px" }} />
            Login with Github
          </Button>
        </Col>
      </Row>
      <h4>Follow Us On</h4>
      <ListGroup className="fs-5">
        <ListGroup.Item>
          <SiFacebook style={{ fontSize: "30px" }} /> Facebook
        </ListGroup.Item>
        <ListGroup.Item>
          <AiFillTwitterCircle style={{ fontSize: "30px" }} />
          Twitter
        </ListGroup.Item>
        <ListGroup.Item>
          <FaInstagram style={{ fontSize: "30px" }} />
          Instagram
        </ListGroup.Item>
      </ListGroup>

      <Container className="bg-light mt-5 py-3">
        <h4>Q-Zone</h4>
        <Row>
          <Col>
            <img src={qZone1} alt="Image 1" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={qZone2} alt="Image 2" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={qZone3} alt="Image 3" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Row className="mt-4">
        <Col>
          <div className="image-container">
            <img src={bg} alt="" className="img-fluid" />
            <div className="text-overlay">
              <h4>Create an Amazing Newspaper</h4>
              <p>
                Discover thousands of options, easy to customize layouts,
                one-click to import demo and much more.
              </p>
              <Button variant="danger">Learn More</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RightNav;
