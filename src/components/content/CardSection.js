import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';

export default class CardSection extends Component {
  render() {
    return (
      <div>
        <Bounce right delay={parseInt("100",10)}>
          <h2 className="text-center">Card Section</h2>
        </Bounce>
      </div>
    )
  }
}
