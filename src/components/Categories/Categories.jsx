import { useEffect , useState } from "react";
function Categories(){
    useEffect(() => {
        const [categories , setCategories ] = useState
        fetch("https://run.mocky.io/v3/be87e9ff-5583-4602-af04-22cf5e973f16").then(
            (res) => {
                return res.json();
            }
        ).then((res) => {
                console.log(res);
            })
    },[])


    return (<div></div>)
}


export default Categories;