import React from 'react';
import PropTypes from 'prop-types';

function SodaDetail(props) {
  const { soda } = props;

  return (
    <React.Fragment>
      <h2>Soda Detail</h2>
      <h3>{soda.name}</h3>
      <h4>{soda.flavor}</h4>
      <p>{soda.cans}</p>
      <hr/>
    </React.Fragment>
  );
}

SodaDetail.propTypes = {
  ticket: PropTypes.object
}

export default SodaDetail;