import cheesecakedata from '../data/cheesecakedata.json';
import {CHOOSE_CATEGORY} from '../actions/index';
//import { Actions to Import} from '../actions';

// Remember that 'state = MYJSONFILEs_json' is the main data
// of the app
export function cheesecake(state = cheesecakedata, action) {
    switch (action.type) {
        // case CHOOSE_CATEGORY:
        //     let myfiltercat = cheesecake.filter((obj) =>{
        //         if (obj.category === "StrawberryCheesecakeRecipes"){
        //             return obj;
        //         }
        //     return myfiltercat;    
        //     });
        //case SOME_ACTION:
        // let characters = state.filter(item => item.id !== action.id);
        // return characters;
        default: 
            return state;
    }
}