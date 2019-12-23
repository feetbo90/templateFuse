import * as actionTypes from './actionTypes';

export const getIngredients = () => {
    const result = fetch("https://react-hook-project.firebaseio.com/ingredients.json");
    console.log("masuk getIngredients")
    
    return (dispatch) => result.then(response => response.json())
    .then(responseData => {
      const loadedIngredients = []
      for(const key in responseData) {
        loadedIngredients.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount
        })
      }
      dispatch({
          type : actionTypes.GET_INGREDIENTS,
          payload : loadedIngredients
      })
    })
}

// export const getIngredients = ( name, age ) => {
//     console.log("ini add Result")
//     return {
//         type: actionTypes.GET_INGREDIENTS,
//         name: name,
//         age: age
//     }
// }