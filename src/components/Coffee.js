import React from "react";
import PropTypes from "prop-types";


function Coffee(props){
  return(
    <React.Fragment>
      <div onClick ={()=> props.whenCoffeeClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>Roast: {props.roast}. Origin: {props.origin}.</h3>
        <h3>Price: ${props.price}/lb</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  roast: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;