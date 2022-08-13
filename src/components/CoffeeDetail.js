import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Coffee Details:</h1>
      <h3>{coffee.name}</h3>
      <p>Roast: {coffee.roast}</p>
      <p>Origin: {coffee.origin}</p>
      <p>Price: ${coffee.price}/lb</p>
      <p>Amount available {coffee.amount}</p>
      <button onClick={()=> onClickingDelete(coffee.id)}>remove coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes={
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default CoffeeDetail;