import React from "react";
import { Button, Card, CardFooter, Image, ListGroup } from "react-bootstrap";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import moment from "moment";
import { FaEye, FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  // console.log(category);
  const {_id, title, image_url, details, author, total_view, rating } = category;
  return (
    <Card className="mb-4">
      <Card.Header className="bg-light">
        <div className="d-flex align-items-center">
          <Image src={author?.img} style={{ height: "45px" }} roundedCircle />
          <div className="ms-3 flex-grow-1">
            <Card.Text className="mb-0">{author?.name}</Card.Text>
            <Card.Text>
              {moment(author?.published_date).format("YYYY-MM-DD")}
            </Card.Text>
          </div>
          <div>
            <CiBookmark />
            <CiShare2 />
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={image_url} />
        <Card.Title className="mt-3">{title}</Card.Title>
        <Card.Text className="mb-0">
          {details.length > 250 ? details.slice(0, 250) : details}...
        </Card.Text>
        <Link to={`/news/${_id}`}>Read more</Link>
      </Card.Body>
      <Card.Footer className="d-flex align-items-center">
        <div className="flex-grow-1 d-flex align-items-center gap-1">
          <Rating
            placeholderRating={rating?.number}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          />
          <span>{rating?.number}</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Category;
