import React from "react";
import logo from "./../img/coffeeCommandLogo.png";

function Header(){

  return (
    <React.Fragment>   
      <img src= {logo} alt="illustration of sci-fi mission control technicians"/>
      <h2>Coffee technician inventory interface</h2>
    </React.Fragment>  
  );
}

export default Header;