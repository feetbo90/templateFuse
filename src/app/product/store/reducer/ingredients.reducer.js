import * as Actions from '../actions/actionTypes';


const initialState = {
    ingredients : []
};

const ingredientsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        
        case Actions.GET_INGREDIENTS :
            return {
                ...state,
                ingredients : action.payload
            }
        default : 
            return state;
    }
};

// const ingredientsReducer = ( state = initialState , action ) => {

//     switch (action.type) {
//         case Actions.GET_INGREDIENTS:
            
//             return {
//                 ...state, counter : state.counter + 1
//             }
//         default:
//             return state
//     }
// };

export default ingredientsReducer;