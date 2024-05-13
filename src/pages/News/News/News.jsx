import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import EditorInsights from "../EditorsInsights/EditorInsights";

const News = () => {
  const news = useLoaderData();
  const { category_id, image_url, title, details } = news;
  // console.log(news);
  return (
    <div>
      <Card className="mb-4">
        <Card.Body>
          <Card.Img variant="top" src={image_url} />
          <Card.Title className="mt-3">{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft />
              All News in this Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorInsights/>
    </div>
  );
};

export default News;
