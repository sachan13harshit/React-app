import { useEffect , useState } from "react";
import { useDispatch } from "react-redux";
import { loadCategories } from "../../stores/Categories";
function Categories(){
    const [categories , setCategories ] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategories());
    },[])
    return (<div>
        {categories.map((item)=> {
            return (
                <div key = {item.id}> {item.name} </div>
            )
        })}
    </div>)
}

export default Categories;