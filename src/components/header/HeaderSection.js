import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';


export default class HeaderSection extends Component {
  render() {
    const bigHeader = this.props.bigHeader;
    if (bigHeader === true) {
          return (<div className="parallax-header parallax">
              <div className="divHeaderTitle">
                <h1 className="text-white text-center">
                  Delectable Scrumptious Cheesecake Recipes
                </h1>
              </div>
            </div>)
    }
return (
  <div className="parallax-header2 parallax">
      <h1 className="text-white text-center letterpress">The Header</h1>
    <Jumbotron>
      <h1 className="display-3 text-white">ScrumptiousHello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-2" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    </Jumbotron>
  </div>)

  }
}
