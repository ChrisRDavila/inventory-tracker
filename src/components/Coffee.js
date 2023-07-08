import React from "react";
import PropTypes from "prop-types";

function Coffee(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
      <h3>{props.name} from {props.origin}</h3>
      <p><em>Price per pound: ${props.price}</em></p>
      <p><em>Roast: {props.roast}</em></p>
      <p><em>In Stock: {props.amount}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  amount: PropTypes.number,
  bags: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;