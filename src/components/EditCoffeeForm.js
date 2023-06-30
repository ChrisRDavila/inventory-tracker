import React from "react";
import PropTypes from "prop-types";

function EditCoffeeForm(props){
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    const numberOfBags = 0;
    props.onEditCoffee({
      name: event.target.name.value, 
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      amount: event.target.amount.value,
      bags: numberOfBags,
      id: coffee.id
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleEditCoffeeFormSubmission}>
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
          name='amount'
          placeholder='bags in inventory' 
          className='form-control'/>

        <button type='submit'>Edit this List Item</button>
      </form>
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;