import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseCat } from '../../actions';
import { withRouter } from 'react-router';

import  * as theCats from '../../data/cheesecategories';  // imports all exports


class ArticleList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      };
    }
    

    render() {
        const mycheesecake = this.props.cheesecake;
        console.log(this.props.match.params);
       // console.log(mycheesecake);
        //console.log(theCats.cheeseCats);
        const mystraw = mycheesecake.filter(item => {
            if (item.category === theCats.LiqueurCheesecakeRecipes ) {
                return item;
            }
        });

        console.log(mystraw);

        return (
            <div className="bg-success">
                <h1 className="text-center" > Juan's Article List </h1>
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