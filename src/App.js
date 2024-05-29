
import './App.css';
import Products from './components/Products/Products';
import {a,b} from './components/Products/Products';


function App() {
  console.log(a);
  console.log(b);
  return (
    <div className="App">
     <a/>
      <Products />
    </div>
  );
}

export default App;


// export a function , then export is used to export the function
// import is used to import the function , for use in the file
// named export - 
// default export 
// in one js file you have default export 
// and multiple named exports