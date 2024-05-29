import"./ProductCard.css";
import {useRef} from "react";
import {useState} from "react"; 
import AddToCart from "../AddToCart/AddToCart";
import Effect from "../Effect/Effect";
function ProductCard({title,price}){
    let pRef = useRef();
    let inputRef = useRef();
    let outputRef = useRef();
    let [inputValue, setInputValue] = useState('class');
    function printTitle(){
        console.log(title);
        console.log(pRef.current.innerText);
       
        // console.log(inputRef.current.value);
        if(pRef.current.style.display === "none"){
            pRef.current.style.display = "block"
        }
        else{
            pRef.current.style.display = "none"
        }
    }
    // function handleInputChange() {
        
    //   }
    return (
        <div className="product-card">
       <p onClick={printTitle}> {title}</p> 
       <p ref={pRef}> {price} </p>
      {/* <input type="text" ref={inputRef}  onChange={handleInputChange} />
        <p ref={outputRef}> Over here is the input </p> */}
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <p> Output is :  {inputValue} </p>
        <AddToCart inputValue={inputValue} />
        <Effect />
        </div>
    )
}
export default ProductCard;
// when passing properties , or probs or paramter 
//{props.title} - is used to access the title property of the props object
// in js class is a reserved word , so we use className
// hooks are helper functions.  
// hooks are used to add functionality to the component
// useState()
// useEffect()
// useRef()
// custom hooks -
// default hooks are provided by react
// they should be idempotent, they should not be an condition or loop.
// they should not render a ui .
// useRef is used to point to a 


// state variable is used to store the state of the component
// and the value of a variable would be retained on re render
// mounting is the first time the function is called 
// rerendering is when the function is called again again

// useState(default value)
// returns as an array [stateVar , settetFun]


// this is a control component , the value of input and output is contolled


// useEffect(fn , []) , i will take two aprameters , one callback function and an array of dependicies .   this callback function will be called when the component is mounted and when the component is updated.

// in dependency array , state variables , probs that are state variables in the parent component , and functions that are state variables in the parent component.

// useref , usestate - , both persist , useref dont rerenders , usestate renders .