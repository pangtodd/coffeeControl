import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onLessCoffee } = props;

  return (
    <React.Fragment>
      <h1>Coffee Details:</h1>
      <h3>{coffee.name}</h3>
      <p>Roast: {coffee.roast}</p>
      <p>Origin: {coffee.origin}</p>
      <p>Price: ${coffee.price}/lb</p>
      <p>Amount available {coffee.amount}</p>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id)}>Delete coffee</button>
      <button onClick ={()=> onLessCoffee(coffee.id)}>Sell a pound!</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes={
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onLessCoffee: PropTypes.func,
  onClickingEdit: PropTypes.func 
}

export default CoffeeDetail;