function AddToCart({product , cart , increaseQuantity , decreaseQuantity }) {
    function increase(){
        console.log(product);
        increaseQuantity(product);
        
    }
    function decrease(){
        decreaseQuantity(product);
    }
    let quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if(quantity===0){
        return (
            <div>
               <button onClick = {increase} > Add To Cart </button>
               
              
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

export default AddToCart;


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