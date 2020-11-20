import React from 'react';
import SodaDetail from './SodaDetail';
import NewSodaForm from './SodaForm';
import SodaList from './SodaList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SodaControl() {
  return (
    <>
      <Row>
        <Col>
          <SodaList/>
        </Col>
        <Col>
          <NewSodaForm/>
        </Col>
        <Col>
          <SodaDetail/>
        </Col>
      </Row>
    </>
  );
}

export default SodaControl;