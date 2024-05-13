import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Category from '../Category/Category';

const Categories = () => {

    const categories = useLoaderData();
    // console.log(categories);

    const {id} = useParams();
    // console.log(id)
    // const selectedCategory = categories.find()
    
    return (
        <div>
            {id ? '' :<h3>Dragon News Home</h3>}
            {
                categories.map(category=><Category key={category._id} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;

