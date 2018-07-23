import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';

// Sliders to test
//import Carousel from 'nuka-carousel';
//import AwesomeSlider from 'react-awesome-slider';
//import 'react-awesome-slider/dist/styles.css';
//import Slideshow from 'react-slidez';  // causes dark bottom on ArticleContainer page
import ImageGallery from 'react-image-gallery';

import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom'

class CardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThumbnails: false
    }
    
  }
  

  render() {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 2,
    //   slidesToScroll: 2
    // };

    const images = [
      {
        original: 'https://placeimg.com/640/480/nature',
        thumbnail: 'https://placeimg.com/80/60/nature',
        originalClass: 'featured-slide'
      },
      {
        original: 'https://placeimg.com/640/480/nature/sepia',
        thumbnail: 'https://placeimg.com/80/60/nature',
        originalClass: 'featured-slide'
      },
      {
        original: 'https://loremflickr.com/320/240/paris,girl/all',
        thumbnail: 'https://placeimg.com/80/60/nature',
        originalClass: 'featured-slide'
      },
      {
        original: 'https://picsum.photos/458/354?random&time=1532287506594',
        thumbnail: 'https://placeimg.com/80/60/nature',
        originalClass: 'featured-slide'
      },
      {
        original: 'https://picsum.photos/458/354?random&time=1532287526595',
        thumbnail: 'https://placeimg.com/80/60/nature',
        originalClass: 'featured-slide'
      },
      {
        original: 'https://picsum.photos/458/354?random&time=1532287616912',
        thumbnail: 'https://placeimg.com/80/60/nature',
        originalClass: 'featured-slide'
      }
    ];
    
    return (
      <div className="pt-3 bg-secondary" >
        <Bounce right delay={parseInt("100",10)}>
          <h2 className="text-center">Card Section</h2>
        </Bounce>
        <div className="w-25 pb-4 mx-auto" >
          <ImageGallery showThumbnails={this.state.showThumbnails} sizes="50vw" items={images} />
        </div>
        <div>
          {/* <AwesomeSlider  className="aws-btn" >
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
            <div data-src={require('../../images/cheesecake2-1250x800.jpg')} />
            <div data-src={require('../../images/cheesecake2-1250x800.jpg')} />
            <div data-src={require('../../images/cheesecake2-1250x800.jpg')} />
          </AwesomeSlider> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cheesecake: state.cheesecake
  }
}

export default withRouter(connect(mapStateToProps, null)(CardSection))