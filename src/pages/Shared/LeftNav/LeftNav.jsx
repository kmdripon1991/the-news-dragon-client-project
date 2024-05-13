import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSideCard from "../../Home/LeftSideCard/LeftSideCard";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  // console.log(categories);
  return (
    <div>
      <h2>All Categories</h2>
      <div className="mt-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="text-decoration-none fw-bold text-muted fs-5">
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <LeftSideCard/>
    </div>
  );
};

export default LeftNav;


