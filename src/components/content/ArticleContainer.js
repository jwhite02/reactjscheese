import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HtmlToReactParser from 'html-to-react/lib/parser';
import { Container, Row, Col } from 'reactstrap';
import RecipeHeader from '../header/RecipeHeader';
import { Link } from 'react-router-dom';

import * as theCats from '../../data/cheesecategories';  
class ArticleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    
    }
    
    render() {
        const mycheesecake = this.props.cheesecake;
        console.log(mycheesecake);
        const uritag = this.props.match.params.uritag;
        console.log(this.props.match);
        console.log(this.props.location);
        
        const theArticleContent = mycheesecake.filter((item) => {
            if (item.URITag === uritag) {
                return item
            }
        })

        let directions = theArticleContent[0].Directions;
        const ingredients = theArticleContent[0].Ingredients;
        console.log(directions);
        const htmlToReactParser = new HtmlToReactParser();
        const reactDirections = htmlToReactParser.parse(directions);
        const theingred = htmlToReactParser.parse(ingredients);
        
        return <div>
            <RecipeHeader isRcHeader={this.props.isHeader   } />
            <div className="pt-5 divBgRepeatArt">
                <div className="" style={{ marginBottom: '5rem' }}>
                    <h1 className="text-center" style={{ fontSize:'3.5rem' }} >
                        {theArticleContent[0].Title}
                    </h1>
                    <ul className="list-unstyled text-center" style={{ fontSize:'2.5rem' }} ><li><Link to='/'>Home</Link></li> </ul>
                </div>
                <Container style={{ marginBottom: '3rem' }} >
                    <Row>
                        <Col>
                            <div className="divUl" style={{ backgroundColor: 'white',
                                fontSize: '2.0rem', background: "rgba(255, 255, 255, 0.01)"
                                 }}>
                                <ul className="list-unstyled">{theingred}</ul>
                            </div>
                        </Col>
                        <Col>
                            <div  className="h2Directions" style={{fontSize:'2.0rem'}} >
                                {reactDirections}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
          </div>;
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        cheesecake: state.cheesecake
    }
}


export default withRouter(connect(mapStateToProps, null)(ArticleContainer));