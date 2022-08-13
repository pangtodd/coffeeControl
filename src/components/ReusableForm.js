import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
          name="amount"
          placeholder="default:130lbs" />
        <input
          type="number"
          name="price"
          placeholder="price of coffee per lb" />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes ={
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;