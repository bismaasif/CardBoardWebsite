import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProductCard from "../../Component/ProductCard/ProductCard";
import Category from "../Category/Category";
import { Link } from "react-router-dom";
import './CategoryProduct.css'
import {fetchcategoryproduct,clear,fetchcategoryproduct1} from './../../Redux/Product/ProductActions';

const CategoryProduct=({
fetchcategoryproduct,clear,products,fetchcategoryproduct1,category} )=>{
    console.log(products)
    // const  [category,setcategory]=useState("pizza");
    
    useEffect(() => {
        //cdm
        
        // const url=window.location.href;
        // const para=url.split("/");
        // setcategory(para[4])
        // // console.log(category)
        // console.log(para[4])
        
    if(category==="pizza"){
         fetchcategoryproduct()
        }
     else  if(category==="shipping"){
         fetchcategoryproduct1();
    
        }
        

    
    return ()=>{
    clear()
    }
            },[])
            
          
          
// //             // console.log(products);
//             const url=window.location.href;
// //             // console.log(url)
//  const para=url.split("/");
// // //   console.log(para[4])
// setcategory(para[4])


    return(
        
        <>
        {/* <h3>categoryproducts</h3> */}
        <div className="display">
        {products.map((product)=> <ProductCard key={product.id} {...product} /> )}
        </div>
       

        </>

    )
}
var mapState=(state)=>({
    products:state.products
    })
var actions={
    fetchcategoryproduct,
    clear,
    fetchcategoryproduct1
}
export default connect(mapState,actions) (CategoryProduct);