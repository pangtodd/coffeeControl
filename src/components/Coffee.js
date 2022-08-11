import React from "react";

function Coffee(props){
  return(
  <React.Fragment>
      <h3>{props.name}</h3>
      <h3>Roast: {props.roast}. Origin: {props.origin}.</h3>
      <h3>Price: ${props.price}/lb</h3>
      <hr/>
  </React.Fragment>
  );
}

export default Coffee;