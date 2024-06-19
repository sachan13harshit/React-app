import { useState , useEffect} from "react";
function Effect(){
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
   console.log("rerendered");
    useEffect(() => {
        console.log("mounted");
    },[count,count1]);
    function increment(){
        setCount(count + 1);
    }
    return (
        <div>
           <button onClick={increment}> Increment </button>
              <p> Count is : {count} </p>
                <button onClick={() => setCount1(count1 + 1)}> Increment </button>
                <p> Count1 is : {count1} </p>
        </div>
    )
}

export default Effect;
