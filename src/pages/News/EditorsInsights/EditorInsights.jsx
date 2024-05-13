import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import editorsInsight1 from "../../../assets/editorsInsight1.png";
import editorsInsight2 from "../../../assets/editorsInsight2.png";
import editorsInsight3 from "../../../assets/editorsInsight3.png";

const EditorInsights = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
        <Card>
          <Card.Img className="img-fluid" variant="top" src={editorsInsight1} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img className="img-fluid" variant="top" src={editorsInsight2} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img className="img-fluid" variant="top" src={editorsInsight3} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EditorInsights;
