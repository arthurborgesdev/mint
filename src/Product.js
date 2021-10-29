import React from 'react';
import PropTypes from 'prop-types';

const Product = ({
  image, title, description, price, contact,
}) => (
  <>
    <img src={image} alt={`the visual representation of a ${title}`} />
    <h3>{title}</h3>
    <p>{description}</p>
    <h4>{price}</h4>
    <p>{contact}</p>
  </>
);

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

export default Product;
