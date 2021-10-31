import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ data }) => (
  <>
    <img src={data.image} alt={`the visual representation of a ${data.title}`} />
    <h3>{data.title}</h3>
    <p>{data.description}</p>
    <h4>{data.price}</h4>
    <p>{data.contact}</p>
  </>
);

Product.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Product;
