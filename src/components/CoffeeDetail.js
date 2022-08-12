import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee } = props;

  return (
    <React.Fragment>
      <h1>Coffee Details:</h1>
      <h3>{coffee.name}</h3>
      <p>Roast: {coffee.roast}</p>
      <p>Origin: {coffee.origin}</p>
      <p>Price: ${coffee.price}/lb</p>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes={
  coffee: PropTypes.object
}

export default CoffeeDetail;