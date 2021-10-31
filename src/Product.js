import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Product = ({ data }) => {
  const intention = useRef(null);
  return (
    <div>
      <div>
        <img src={data.image} alt={`the visual representation of a ${data.title}`} />
      </div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <h4>{data.price}</h4>
      {
        intention.current ? (
          <p>{data.contact}</p>
        ) : (
          <button type="button">Show contact</button>
        )
      }
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Product;
