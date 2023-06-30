import React from "react";
import PropTypes from "prop-types";

function ReusableCoffeeForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableCoffeeForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableCoffeeForm;