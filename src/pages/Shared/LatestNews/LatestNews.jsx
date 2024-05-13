import React from "react";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <Container className="my-3">
      <div className="p-2 bg-body-tertiary">
        <div className="d-flex justify-content-between">
          <Button variant="danger">Latest</Button>
          <Marquee
            className="text-danger"
            speed={150}
            style={{ marginLeft: "10px" }}
          >
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
      </div>
    </Container>
  );
};

export default LatestNews;
