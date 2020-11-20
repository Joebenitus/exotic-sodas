import React from 'react';
import PropTypes from 'prop-types';

function Soda(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h4>Flavor: {props.flavor}</h4>
      <p><em>${props.cost}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Soda.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  cost: PropTypes.string
}

export default Soda;