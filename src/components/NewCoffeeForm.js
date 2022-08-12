import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewCoffeeForm(props){
  function handleNewCoffeeFormSubmission(event){
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: parseInt(event.target.price.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="name of coffee" />
        <input
          type="text"
          name="roast"
          placeholder="roast of coffee" />
        <input
          type="text"
          name="origin"
          placeholder="origin of coffee" />
        <input
          type="number"
          name="price"
          placeholder="prce of coffee per lb" />
          <button type='submit'>add coffee, return to list</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes ={
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;