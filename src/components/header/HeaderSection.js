import React, { Component } from 'react';

export default class HeaderSection extends Component {
  render() {
    const bigHeader = this.props.bigHeader;
    if (bigHeader === true) {
          return (
            <div className= "parallax-header parallax">
          <h1 className="text-white text-center">The Header</h1>
      </div>
      )
    }
return (
  <div className="parallax-header2 parallax">
      <h1 className="text-white text-center">The Header</h1>
    </div>)

  }
}
