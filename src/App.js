
import './App.css';
// import logo from './logo.svg';
import Products from './components/Products/Products';
import {a,b} from './components/Products/Products';
// import NavBar from './components/Navbars/Navbar'
// import Typing from './components/Typing/Typing';
// import Tile from './components/Tile/Tile';
// import Banner  from './components/Banner/Banner';
// import ProgressBar from './components/ProgressBar/ProgressBar';
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import { createContext } from 'react';
import CartContext from './context/CartContext';
function App() {
  // const [percentage, setPercentage] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPercentage((prev) => (prev < 100 ? prev + 10 : 100));
  //   }, 1000)

  //   return () => clearInterval(interval);
  // })
  // return (
  //   <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <NavBar />

  //   </header>
  //   <Typing
  //       text={[
  //         "Hello, welcome to the typing effect demo!",
  //         "Enjoy exploring this cool effect!",
  //         "This is an example of typing and deleting text.",
  //       ]}
  //       typingSpeed={100}
  //     deletingSpeed={50}
  //     duration={1000}
      
  //     />
  //     <Tile 
  //        header={"Header"}
  //        subHeader={"this is subheader"}
  //        img={"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
  //         text={"this is the text"}
  //         link={"https://www.scaler.com"}
  //         linkText={"Scaler"}
  //         position={"img-right"}
  //         bgColor={"bg-light"}
  //         />

  //         {/* <Banner /> */}

  //         <ProgressBar percentage={percentage}/>

  const [cart , setCart] = useState({});
  function increaseQuantity(Product){
    console.log(Product);
    const newCart = {...cart};
    // ...Cart is used to copy the cart object , so that we dont change the original cart object
    if(!newCart[Product.id]){
      newCart[Product.id] = {
       ...Product,
        quantity : 0
      };
    }
    newCart[Product.id].quantity++;
    setCart(newCart);    
  }
  function decreaseQuantity(Product){
    const newCart = {...cart};
    if(!newCart[Product.id]){
      return;
    }
    newCart[Product.id].quantity--;

    if(newCart[Product.id].quantity === 0){
      delete newCart[Product.id];
    }
    setCart(newCart);
  }
  return (
    <CartContext.Provider value={{cart,increaseQuantity,decreaseQuantity}}>
       <div className="App">
      <Products cart={cart} increaseQuantity = {increaseQuantity} decreaseQuantity =  {decreaseQuantity} />
      </div>
    </CartContext.Provider>
  );
}




// export a function , then export is used to export the function
// import is used to import the function , for use in the file
// named export - 
// default export 
// in one js file you have default export 
// and multiple named exports



// first we will make navabar , inside it we will have a div for left side , and a div fro right side .
// in the right side div , we will add four 5 heading , . in the right side div we will add space between . all the headings . 

//  navbar can be used outside the header and indisde the header
// navbar is used to navigate to pages 



// Navbar Component
// use a ul as a container and there will be 4 li 
// we will use icons to render the images 
// we will create under line image using before , after
// onhover make 

// typewriter Component
// wwe will store all the text in the array . 
// and then from array we will display one element , then delete it after every 3-4 seconds 

// ty

// whats advantage of fonts , you can get flexibility .
// 4 efficiency hacks , your images should be served in a server , using a zip 



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



// empty dependency array = only once mounting
//no dependency array = every time the component is mounted and rerendered
// dependency array = only when the value of the dependency changes + mounting  , whole function will be called again






// button -
// - 1 + 
// let a = {b:10 , c:20};
// a.b = 20;
// let b = {...a}

// a => 1234
// 

// pages will not be imported in somw another way , we will use the router to navigate to the pages

export default App;

// 


