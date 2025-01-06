import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const CategoryDropDown =({ categories, onCategorySelect }) => (
    <>

    {categories.map((category) => (
        <NavDropdown.Item 
            key={category} 
            onClick={() => onCategorySelect(category)}
            href={`/books/${category.toLowerCase()}`}>
            {category}
        </NavDropdown.Item>
    ))}
    </>

);

export default CategoryDropDown;