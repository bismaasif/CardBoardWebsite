import { connect, connectAdvanced } from "react-redux";
import CategoryProduct from "../../Pages/CategoryProduct/CategoryProduct";

import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
const CategoryList=({...products})=>{
    console.log(products)
    
   
    return(
        <>

<div className="display">
       
    <ProductCard key={products.id} {...products} />
       
        </div>
       <Link to="/cart">
        <button >viiew cart</button>
        </Link>

        </>

    )
}

export default  CategoryList;