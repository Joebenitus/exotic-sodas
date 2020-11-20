import React from 'react';
import SodaDetail from './SodaDetail';
import SodaForm from './SodaForm';
import SodaList from './SodaList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SodaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <SodaForm/>
      buttonText = 'Return to Ticket List';
    } else {
      currentlyVisibleState = <SodaList/>
      buttonText = 'Add Ticket';
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default SodaControl;