import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

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
      <form onSubmit={handleNewCoffeeFormSubmission}>
      <input
          type='text'
          name='name'
          placeholder='name of blend'
          className='form-control' />
        <input
          type='text'
          name='origin'
          placeholder='country of origin'
          className='form-control' />
        <input
          type='number'
          name='price'
          placeholder='price per pound'
          className='form-control' />
        <input
          type='text'
          name='roast'
          placeholder='style of roast'
          className='form-control' />
        <input
          type='number'
          name='bags'
          placeholder='add 130 pounds to inventory' 
          className='form-control'/>

        <button type='submit'>Add</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;