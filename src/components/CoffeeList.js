import React from "react";
import Coffee from "./Coffee";

const mainCoffeeList = [
  {
    name:"Sumatra",
    origin: "Indonesia",
    price: 15,
    roast: "dark"
  },
  {
    name:"Colombian",
    origin: "Colombia",
    price: 14,
    roast: "medium"
  },
  {
    name:"Ethiopian",
    origin: "Ethiopia",
    price: 19,
    roast: "light"
  }
];

function CoffeeList(){
  return (
    <React.Fragment>
      <hr/>
      {mainCoffeeList.map((coffee, index)=>
        <Coffee name={coffee.name}
          origin = {coffee.origin}
          roast = {coffee.roast}
          price = {coffee.price}
          key = {index}/>
      )}
    </React.Fragment>
  );
}

export default CoffeeList;