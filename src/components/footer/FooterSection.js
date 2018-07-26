import React, { Component } from 'react';
import {Alert} from 'reactstrap';
import laven from '../../images/Lavender-White-Chocolate-Cheesecake.jpg';

export default class FooterSection extends Component {
  render() {
    return (
      <div style={{
        // background: "url(" + laven + ") no-repeat",
        // height: "500px"
      }}>
        <Alert color="primary">
          <h2 className="text-center" >My Footer</h2>
        </Alert>
      </div>
    )
  }
}
