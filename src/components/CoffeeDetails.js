import React from "react";
import PropTypes from "prop-types";

function CoffeeDetails(props) {
  const { coffee, onClickingDelete, onClickingBuy, onClickingEdit } = props;

  return (
    <React.Fragment>
    <h1>Details for: {coffee.name}</h1>
    <h3>From: {coffee.origin}</h3>
    <h3>Price per Pound: {coffee.price}</h3>
    <h3>Roast: {coffee.roast}</h3>
    <h3>In Stock: {coffee.amount}</h3>
    <hr/>
    
    <button onClick={ onClickingEdit }>Edit Inventory</button>
    <button onClick={() => onClickingDelete(coffee.id)}>Delete from Inventory</button>

    {
    coffee.amount > 0 ? (
    <button onClick={() => onClickingBuy(coffee.id)}>Buy 1 pound</button>) : (
    <h1>{coffee.name} is out of stock</h1>)
    }

    </React.Fragment>
  );
}

CoffeeDetails.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func
}

export default CoffeeDetails;