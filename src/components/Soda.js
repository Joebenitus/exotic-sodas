import React from 'react';
import PropTypes from 'prop-types';

function Soda(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h4>Flavor: {props.flavor}</h4>
      <p><em>Cans left: {props.cans}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Soda.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  cans: PropTypes.number
}

export default Soda;