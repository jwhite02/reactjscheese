import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HtmlToReactParser from 'html-to-react/lib/parser';
import { Container, Row, Col } from 'reactstrap';
import RecipeHeader from '../header/RecipeHeader';

import * as theCats from '../../data/cheesecategories';  // imports all exports


class ArticleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //theArticleContent
        }
    
    }

    
    render() {
        const mycheesecake = this.props.cheesecake;
        console.log(mycheesecake);
        const uritag = this.props.match.params.uritag;
        console.log(this.props.match);
        console.log(this.props.location);
       // console.log(uritag);

        //const theArticleContent = this.state.theArticleContent;
        
        const theArticleContent = mycheesecake.filter((item) => {
            if (item.URITag === uritag) {
                return item
            }
        })

        //console.log(theArticleContent);

        let directions = theArticleContent[0].Directions;
        const ingredients = theArticleContent[0].Ingredients;
        console.log(directions);
        const htmlToReactParser = new HtmlToReactParser();
        const reactDirections = htmlToReactParser.parse(directions);
        const theingred = htmlToReactParser.parse(ingredients);
        

        // const mystraw = mycheesecake.filter(item => {
        //     if (item.category === theCats.LiqueurCheesecakeRecipes) {
        //         return item;
        //     }
        // });
        return <div>
            <RecipeHeader isRcHeader={this.props.isHeader   } />
            <div className="pt-5 divBgRepeatArt">
                <div className="mb-5">
                    <h1 className="text-center" style={{ fontSize:'3.5rem' }} >
                        {theArticleContent[0].Title}
                    </h1>
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