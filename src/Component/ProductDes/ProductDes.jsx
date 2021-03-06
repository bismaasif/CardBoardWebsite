import {fetchspecificproduct,clear} from './../../Redux/Product/ProductActions';
import { connect } from 'react-redux';
import { useState,useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductDesCard from '../ProductDesCard/ProductDesCard';

const ProductDes=({fetchspecificproduct,clear})=>{
    
    var[product,setProduct]=useState({})
    useEffect(async() => {
        //cdm
        
        const url=window.location.href;
        const para=url.split("/");
        console.log(para[4])
       var fproduct= await fetchspecificproduct(para[4])
        setProduct(fproduct)
        console.log(product)
   
    
    return ()=>{
    clear()
    }
            },[])
            
    return(

        
        <>
<Navbar/>
<h3>Product Description</h3>
<ProductDesCard {...product}/>
<Footer/>



        </>
        )
}
var actions={
    fetchspecificproduct,clear
}
export default connect(null,actions) (ProductDes);