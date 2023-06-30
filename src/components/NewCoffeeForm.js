import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableCoffeeForm from "./ReusableCoffeeForm";

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    
    const amountOfBags = event.target.bags.value;
    
    props.onNewCoffeeCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value, 
      bags: 0,
      amount: amountOfBags * 130,
      id: v4()
    });
  }
  
  return (
    <React.Fragment>
      <ReusableCoffeeForm 
      formSubmissionHandler={handleNewCoffeeFormSubmission}
      buttonText="Add 130 pound bag to inventory" />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;