import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props){
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee)=>
        <Coffee 
          whenCoffeeClicked={ props.onCoffeeSelection }
          whenLessCoffeeClicked={ props.onLessCoffee }
          name={coffee.name}
          origin = {coffee.origin}
          roast = {coffee.roast}
          price = {coffee.price}
          amount ={coffee.amount}
          id ={coffee.id}
          key = {coffee.id} />
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
  onLessCoffee: PropTypes.func,
};

export default CoffeeList;