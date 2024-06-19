import"./ProductCard.css";
import {useRef} from "react";
import {useState} from "react"; 
import AddToCart from "../AddToCart/AddToCart";
import Effect from "../Effect/Effect";
import logo1 from '../../Assets/logo1.png';

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
         <img src={logo1} alt="logo" />
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
