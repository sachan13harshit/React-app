import {useSelector , useDispatch} from "react-redux";
import { RemoveToCart, addToCart } from "../../store";
function ReduxAddToCart({product}) {
    // useSelector hook .
    // for dispatch
    console.log("add to cart" , product.id);
    console.log(product)
    let dispatch = useDispatch();
    function increase(){
        // dispatch ({type : "INCREASE_QUANTITY" , payload : product})
        dispatch(addToCart(product));
        // dispatch({type : "ADD_TO_CART" , payload : product});
    }
    function decrease(){
        // dispatch ({type : "DECREASE_QUANTITY" , payload : product})
        // dispatch({type : "REMOVE_FROM_CART" , payload : product});
        dispatch(RemoveToCart(product));
    }
    let quantity = useSelector((state) => {
        return state.cart.items[product.id] ?.quantity || 0;
    });
    if(quantity===0){
        return (
            <div>
               <button onClick = {increase} > AddToCart </button>
            </div>
        )
    }
    else{
        return (
            <div>
               <button onClick = {increase} > + </button>
                <span> {quantity} </span>
               <button onClick = {decrease} > - </button>
            </div>
        )
    }
}
export default ReduxAddToCart;
// We can store products in an arrayList , as in array of objects , we can use map function to iterate , if suppose removing



// Array of object
// object of object



// [{id : 1 , quantity : 10} , {id : 2 , quantity : 20} , {id : 3 , quantity : 30}]
// {{id : 1 , quantity : 10} , {id : 2 , quantity : 20} , {id : 3 , quantity : 30
// cart["3"].


// in object , we dont have have map function 



// how to map in object
// let a = {id : 1 , quantity : 10}
// Object.keys(a)   id , quantity
// Object.values(a)   1 , 10