import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm(props){
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      roast: event.target.roast.value,
      price: parseInt(event.target.price.value), 
      amount: parseInt(event.target.amount.value), 
      id: coffee.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Coffee" />
        <p>current values: </p>
        <p>name: {coffee.name} </p>
        <p>roast: {coffee.roast} </p>
        <p>origin: {coffee.origin} </p>
        <p>amount:{coffee.amount} </p>
        <p>cost:${coffee.price}</p>
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes ={
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;