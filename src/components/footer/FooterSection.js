import React, { Component } from 'react';
import {Alert, Container, Row, Col} from 'reactstrap';
import laven from '../../images/Lavender-White-Chocolate-Cheesecake.jpg';

export default class FooterSection extends Component {
  render() {
    return <div className=" bg-footer " >
        <Container>
          <Row>
            <Col className="text-left" style={{marginTop: '7rem'}} >
            <div> <h3>2018ILoveCheesecake</h3></div>
            </Col>
            <Col className="text-center" style={{marginTop: '4rem', marginLeft: '-15rem'}} >
              <div> 
                <img src={require("../../images/cheesecakePng.png")} height="90" width="90" alt="cheese img" />
              </div>
            </Col>
            <Col className="text-right" style={{marginTop: '7rem', marginRight: '-8rem'}} >
              <div style={{width: '30rem'}}>
                <h3>Providing recipes for the worlds greatest dessert!</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>;
  }
}
