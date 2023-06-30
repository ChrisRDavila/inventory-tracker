import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props){
  return (
    <React.Fragment>
      {props.coffeeList.map((coffee) => 
        <Coffee 
        whenCoffeeClicked = { props.onCoffeeSelect }
        name={coffee.name}
        origin={coffee.origin}
        price={coffee.price}
        roast={coffee.roast}
        amount={coffee.amount}
        bags={coffee.bags}
        id={coffee.id}
        key={coffee.id}
        />
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelect: PropTypes.func
};

export default CoffeeList;