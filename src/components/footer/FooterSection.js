import React, { Component } from 'react';
import {Alert} from 'reactstrap';

export default class FooterSection extends Component {
  render() {
    return (
      <div>
        <Alert color="primary">
          <h2 className="text-center" >My Footer</h2>
        </Alert>
      </div>
    )
  }
}
