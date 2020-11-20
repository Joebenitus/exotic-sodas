import React from 'react';

function Soda(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h4>{props.flavor}</h4>
      <p><em>{props.cost}</em></p>
    </React.Fragment>
  );
}

export default Soda;