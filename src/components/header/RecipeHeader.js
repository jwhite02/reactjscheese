import React, { Component } from 'react';

class RecipeHeader extends Component {
    render() {
        console.log(this.props);
        if (this.props.isRcHeader === true) {
            return (
                <div className="parallax-recipeHeader parallax2">
                    <div className="pt-5" >
                        <h1 className="text-center" ></h1>
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default RecipeHeader;