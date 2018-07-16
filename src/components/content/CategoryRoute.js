import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import ArticleList from './ArticleList';

class CategoryRoute extends Component {
    render() {
        const category = this.props.match.params.category;
        console.log(category);
        console.log('i am in the cat route js')
        console.log(this.props.match);

        let str = category.slice(-7);  // returns 'Recipes'
        let str2 = category.slice(-17, -7);  // returns 'Cheesecake'
        let str3 = category.slice(0, -17);  // returns 'XXXXXXXXX'
        let strSpace = "  ";
        let str4 = str3.concat(strSpace, str2, strSpace, str);

        const catArticles = this.props.cheesecake.map((item) => {
            if (item.category === category){
                //console.log("success!!")
                return (
                  <div className="ml-5 mt-5" key={item.id}>
                        <h1>{item.Title}</h1>
                        <p>{item.Content} </p>
                        <div>
                            <Link to={`/category/${item.category}/${item.URITag}`}>{item.Title}</Link>
                            <Route path={`/category/item.category/:uritag`} component={ArticleList} />
                            {/* <Route path="/category/{item.category}/{item.URITag}" component={ArticleList} /> */}
                            {/* <Route path={`/category/item.category/:uritag`} component={ArticleList} /> */}
                            {/* <Route path="/category/{`${item.category}`}/:uritag" component={ArticleList} /> */}
                        </div>
                        
                  </div>
                );
            }
        });

        return (
            <div>
                <h1 className="text-center" > Category Route Goes here!! {str4} </h1>
                <ul className="list-unstyled text-center" >
                    <li><Link to='/'>Home</Link></li>
                </ul>
                {catArticles}
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