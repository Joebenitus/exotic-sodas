import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function SodaForm(props) {
  function handleNewSodaFormSubmission(event) {
    event.preventDefault();
    const { target } = event
    props.onNewSodaCreation({
      name: target.name.value,
      flavor: target.flavor.value,
      cans: target.cans.value,
      id: v4()
    })
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewSodaFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='flavor'
          placeholder='Flavor'/>
        <input
          type='number'
          name='cans'
          placeholder='Cans Left'/>
        <button type='submit'>Add Soda</button>
      </form>
    </React.Fragment>
  );
}

SodaForm.propTypes = {
  onNewSodaCreation: PropTypes.func
}

export default SodaForm;