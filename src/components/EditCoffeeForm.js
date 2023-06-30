import React from "react";
import ReusableCoffeeForm from "./ReusableCoffeeForm";
import PropTypes from "prop-types";

function EditCoffeeForm(props){
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value, 
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      amount: event.target.amount.value,
      bags: event.target.bags.value,
      id: coffee.id
    });
  }

  return (
    <React.Fragment>
      <ReusableCoffeeForm 
        formSubmissionHandler={handleEditCoffeeFormSubmission} 
        buttonText="Update Inventory" />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;