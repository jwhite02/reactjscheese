import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HtmlToReactParser from 'html-to-react/lib/parser';

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
        const reactElement = htmlToReactParser.parse(directions);
        const theingred = htmlToReactParser.parse(ingredients);
        

        // const mystraw = mycheesecake.filter(item => {
        //     if (item.category === theCats.LiqueurCheesecakeRecipes) {
        //         return item;
        //     }
        // });
        return (
            <div>
                <h1 className="text-center" >{theArticleContent[0].Title}</h1>
                <ul>
                    {theingred}
                </ul>
                {reactElement}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        cheesecake: state.cheesecake
    }
}


export default withRouter(connect(mapStateToProps, null)(ArticleContainer));