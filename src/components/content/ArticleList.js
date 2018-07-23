import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseCat } from '../../actions';
import { withRouter } from 'react-router';
import {Route, Link, NavLink, matchPath} from 'react-router-dom';
import HtmlToReactParser from 'html-to-react/lib/parser';

import  * as theCats from '../../data/cheesecategories';  // imports all exports

import ArticleContainer from './ArticleContainer';


class ArticleList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      };
    }
    
    

    render() {
        //const match = matchPath('/category/recipe/AppleCheesecakeRecipes/autumn-cheesecake ', { path: '/category/:category/:aCat/:uritag'});
        //console.log(match);
        const mycheesecake = this.props.cheesecake;
        console.log(this.props.match);
        console.log(this.props.location);
        console.log(this.props.cheesecake);
        const cheesecake = this.props.cheesecake;

        const htmlToReactParser = new HtmlToReactParser();
        const theArticleContent = cheesecake.filter((item) => {
            if (item.URITag === 'autum-cheesecake'){
                <div>{item.Title}</div>
                const directions = htmlToReactParser.parse(item.directions);
                <div>{directions}</div>
            }
        });
       // console.log(mycheesecake);
        //console.log(theCats.cheeseCats);
        
        const mystraw = mycheesecake.filter(item => {
            if (item.category === theCats.LiqueurCheesecakeRecipes ) {
                return item;
            }
        });

        //console.log(mystraw);

        return (
            <div className="bg-success">
                <h1 className="text-center"> Juan's Article List </h1>
                <span className="text-center d-inline-block"><Link to="/category/recipe/AppleCheesecakeRecipes/autumn-cheesecake"> Autumn Cheesecake </Link></span>
                <Route path="/category/:category/:aCat/:uritag" render={(...props) => { <ArticleContainer  />}} />
            </div>
        );
    }
    
}

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    return {
        cheesecake: state.cheesecake
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({chooseCat}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleList));
//export default ArticleList;