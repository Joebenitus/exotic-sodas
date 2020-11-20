import React from 'react';
import Soda from './Soda';
import PropTypes from 'prop-types';

function SodaList(props) {
  return (
    <React.Fragment>
      <h2>Soda List</h2>
      <hr/>
      {props.sodaList.map((soda, index) => 
        <Soda
          name={soda.name}
          flavor={soda.flavor}
          cans={soda.cans}
          key={index}/>
      )}
      
    </React.Fragment>
  );
}

SodaList.propTypes = {
  sodaList: PropTypes.array
}

export default SodaList;