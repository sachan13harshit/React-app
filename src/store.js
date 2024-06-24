import { createStore } from "redux";


function cartReducer(state = {items : {}} , action ){
    switch(action.type){
        case "ADD_TO_CART":{
            const product = action.payload;
            if(state.items[product.id]){
               return {
                     ...state,
                     items : {
                          ...state.items,
                          [product.id] : {
                            ...state.items[product.id],
                            quantity : state.items[product.id].quantity + 1
                          }
                     }
               }
            }
            else{
                return {
                    ...state,
                    items : {
                        ...state.items,
                        [product.id] : {
                            ...product,
                            quantity : 1
                        }
                    }
                }
            }

        }
        case "REMOVE_FROM_CART":{
            const product = action.payload;
            if(state.items[product.id]){
                return {
                    ...state,
                    items : {
                        ...state.items,
                        [product.id] : {
                            ...state.items[product.id],
                            quantity : state.items[product.id].quantity - 1
                        }
                    }
                }
            }
            else{
                return {
                    ...state,
                    items : {
                        ...state.items,
                        [product.id] : {
                            ...product,
                            quantity : 0
                        }
                    }
                }

            }
        }
        default:
            return state; 
    }
}


const store = createStore(cartReducer);

export default store;



// action is an object , it is having two kwys , type of action +
