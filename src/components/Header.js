import React from "react";
import coffeeIMG from "./../img/coffeeIMG.jpeg"

function Header(){
  return (
    <React.Fragment>
      <img src={coffeeIMG} alt="An image of coffee" />
      <h1>Jake's Coffee inventory tracker</h1>
    </React.Fragment>
  );
}

export default Header;