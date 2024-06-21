import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import React from "react";
function Products() {
    const {cart , increaseQuantity , decreaseQuantity} = useContext(CartContext);
    console.log("products");
    const products = [
        {
        id: 1,
        title: "Apple iPhone 14",
        price: "Rs. 1,00,000"
        },
        {
        id: 2,
        title: "Apple iPhone 13",
        price: "Rs. 70,000"
        },
        {
        id: 3,
        title: "Google Pixel 7",
        price: "Rs. 50,000"
        },
        {
        id: 4,
        title: "Nokia 1100",
        price: "Rs. 2,000"
        },
        {
        id: 5,
        title: "Samsung Galaxy S10",
        price: "Rs. 1,00,000"
        },
        {
        id: 6,
        title: "Sony Xperia S10",
        price: "Rs. 1,00,000"
        }
        ];

        function useWindowSize() {
            let [width, setWidth] = useState(window.innerWidth);
            let [height, setHeight] = useState(window.innerHeight);
            useEffect(() => {
                window.addEventListener("resize", () => {
                    setWidth(window.innerWidth);
                    setHeight(window.innerHeight);
                })
            }, [])
            return {width, height}
        }

    // // let products = []
    // let [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch("https://666bc73149dbc5d7145b3586.mockapi.io/products/Product").then(
    //         (response) => {
    //             return response.json();
    //         }
    //     ).then((res) => {
    //         console.log(res);
    //         setProducts(res);
    //     })
    // }, [])
    // fetch("https://https://run.mocky.io/v3/279c028e-f492-4e0f-932b-51dbed1b1dce").then(
    //     (response) => {
    //         return response.json();
    //     }
    // ).then((res) => {
    //     console.log(res);
    //     setProducts(res);
    // })
        return (
        <div>
           {
                products.map(function(item,index){
                    return (<ProductCard key = {index} product={item} />)
                    
                })
                // useWindowSize();
            }
        </div>
    );
}


export let a = 10;
export let b = 20;
export default React.memo(Products);


// for not rerendering , we will use useeffect hook ., with empty array as second argument .



// diff = diffAndApplyCha

// oldDom = [
// <ProductCard title="Title 1" />,
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ] // newDom = [
// <ProductCard title="Title 1" />,
// <ProductCard title="Title 4" />,
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ]

// if we add index in the map , then then when in newDom , we have to give index also., or wheb 
// if we give index 
// if using index, we will take same steps , to register chaneg


// Custom hooks are helper functions.



// UseWindowSize() - width and height of the screen at any given instance.

// useWindowSize() - returns an object with width and height properties.


