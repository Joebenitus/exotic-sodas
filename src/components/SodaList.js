import React from 'react';
import Soda from './Soda';

const masterSodaList = [
  {
    name: 'Berry Pop',
    flavor: 'Ginger',
    cans: 100
  },
  {
    name: 'Joe\'s Peach',
    flavor: 'Corn',
    cans: 135
  },
  {
    name: 'Non-Alcoholic Beer',
    flavor: 'Bread',
    cans: 115
  }
]

function SodaList() {
  return (
    <React.Fragment>
      <h2>Soda List</h2>
      <hr/>
      {masterSodaList.map((soda, index) => 
        <Soda
          name = {soda.name}
          flavor = {soda.flavor}
          cans = {soda.cans}
          key = {index}/>
      )}
      
    </React.Fragment>
  );
}

export default SodaList;