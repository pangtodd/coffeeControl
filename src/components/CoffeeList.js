import React from "react";
import Coffee from "./Coffee";

function CoffeeList(){
  return(
    <React.Fragment>
      <Coffee
        name= "Sumatra"
        origin= "Indonesia"
        price= {15}
        roast= "dark"/>
      <Coffee
        name= "Colombian"
        origin= "Columbia"
        price= {14}
        roast= "medium"/>
      </React.Fragment>
    
  );
}

export default CoffeeList;