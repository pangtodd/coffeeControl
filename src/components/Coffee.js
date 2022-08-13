import React from "react";
import PropTypes from "prop-types";


function Coffee(props){
  return(
    <React.Fragment>
      {/* <div onClick ={()=> props.whenCoffeeClicked(props.id)}> */}
        <h3>{props.name}: ${props.price}/lb</h3>
        <h3>Amount available: {props.amount}lbs</h3>
        <button onClick ={()=> props.whenCoffeeClicked(props.id)}>Coffee details</button>
        <button onClick ={()=> props.whenLessCoffeeClicked(props.id)}>Sell a pound!</button>
        <hr/>
      {/* </div> */}
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  roast: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
  whenLessCoffeeClicked: PropTypes.func
};

export default Coffee;