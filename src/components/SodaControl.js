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
      formVisibleOnPage: false,
      masterSodaList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewSodaToList = (newSoda) => {
    const newMasterSodaList = this.state.masterSodaList.concat(newSoda);
    this.setState({ masterSodaList: newMasterSodaList,
                    formVisibleOnPage: false })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <SodaForm onNewSodaCreation={this.handleAddingNewSodaToList}/>
      buttonText = 'Return to Soda List';
    } else {
      currentlyVisibleState = <SodaList sodaList={this.state.masterSodaList}/>
      buttonText = 'Add Soda';
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