import React from "react";
import { v4 } from 'uuid';

function NewCoffeeForm(){

  function handleNewCoffeeFormSubmission(event){
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.roast.value);
    console.log(event.target.origin.value);
    console.log(event.target.price.value);
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

export default NewCoffeeForm;