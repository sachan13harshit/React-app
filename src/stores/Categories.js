export function loadCategories(){
    return (dispatch) => {
        fetch("https://run.mocky.io/v3/1c9a787b-3e6b-4fc2-9460-f908e2e3cc29").then(
            (res) => {
                return res.json();
            }
        ).then((res) => {
                console.log(res);
                dispatch({type : "LOAD_CATEGORIES_DONE" , payload : res});
            })
    }
}


function categoriesReducer(state = {
    categories : []
} , action) {
        switch(action.type){
            case "LOAD_CATEGORIES_DONE":{
                return {
                    ...state,
                    categories : action.payload
                }
            }
            default:
                return state;
     }
}


export default categoriesReducer;


