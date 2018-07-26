import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import ArticleList from './ArticleList';
import ArticleContainer from './ArticleContainer'
import FooterSection from '../footer/FooterSection';
import RecipeHeader from '../header/RecipeHeader';
import CategoryHeader from '../header/CategoryHeader';

import { Container, Row, Col } from 'reactstrap';

class CategoryRoute extends Component {
    
    render() {
        const category = this.props.match.params.category;
        //const category = "CandyCheesecakeRecipes";
        const match = this.props.match;
        console.log(category);
        console.log('i am in the cat route js')
        console.log(this.props.match);
        console.log(this.props.children);

        let str = category.slice(-7);  // returns 'Recipes'
        let str2 = category.slice(-17, -7);  // returns 'Cheesecake'
        let str3 = category.slice(0, -17);  // returns 'XXXXXXXXX'
        let strSpace = " ";
        let str4 = str3.concat(strSpace, str2, strSpace, str);
        let myRoute;

        const catArticles = this.props.cheesecake.map((item) => {
            if (item.category === category){
                //console.log("success!!")
                return (
                    <div className="ml-5 mt-5" key={item.id} style={{width: '85rem',
                        paddingLeft: '10rem'
                    }} >
                        <Container>
                            <h1>{item.Title}</h1>
                            <p style={{
                                fontSize: '1.7rem'
                            }}>{item.Content} </p>
                            <div>
                                <ul className="list-unstyled">
                                    <li key={item.URITag}><Link to={`/recipe/${item.URITag}`}>{item.Title}</Link></li>
                                </ul>
                            </div>  
                        </Container>  
                  </div>
                );
            }
        });
        let headValue;
        console.log(str4);
        
        if (str4 === '  recipe'){
                   headValue  = <span></span>;
         }
        else {
            headValue = (<div className="mt-5">
            <h1 className="text-center"> {str4} </h1> <ul className="list-unstyled text-center" ><li><Link to='/'>Home</Link></li> </ul>
            </div>)
         }

        return (
            <div>
                <CategoryHeader />
                {headValue}
                {catArticles}
                <Route path={`recipe/:uritag`} render={(props) => (<div>  <ArticleContainer isHeader={true} location={this.props.location} /> <FooterSection /> </div>)} /> 
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cheesecake: state.cheesecake
    }
};


export default withRouter(connect(mapStateToProps, null)(CategoryRoute));