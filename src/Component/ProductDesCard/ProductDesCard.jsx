import { addproduct,removeproduct,deleteproduct } from "../../Redux/Cart/CartActions"; 
import { connect } from "react-redux";
import img2 from './../../Images/shifting.jpg';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import img3 from './../../Images/pizza.jpg';
import img4 from './../../Images/box.jpg';
import img5 from './../../Images/shoes.jpg';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ProductDesCard.css'
import { useState } from "react";

  const ProductDesCard=({addproduct,removeproduct,deleteproduct,...product})=>{
    var{id,description,cost,quantity,title}=product;
    var[img ,setimage]=useState("first")
    
    return(
        <>

        <div className="des">
<div className="d1">
  <img className="d2image" src={img3} onClick={()=>setimage("first")}/>
  
</div>
<div className="d2">
<button className="zoom">
  <ZoomInIcon fontSize="large"/>
</button>
{img==="first" ? <img src={img3} className="d2image"/>:null}
{img==="second" ? <img src={img4} className="d2image"/>:null}
{img==="third" ? <img src={img5} className="d2image"/>:null}

</div>
<div className="d3">
 <h1 className="h11">{title}</h1> <br/>
 <h2 className="h22">$-{cost}</h2> <br/>
 <p classname="h33"> {description}</p><br/>
 
 {/* <p className="h44"> Quantity {quantity}</p> <br/> */}
 <h3>
 <p className="quantity"> <b>Quantity   2</b>    <ExpandLessIcon className="ok1"  fontSize="small"/> <br/>
 <ExpandMoreIcon className="ok" fontSize="small"/> </p>
  
{/*  
 <p className="updown">
 <button ><ExpandLessIcon fontSize="small"/><br/><ExpandMoreIcon fontSize="small"/></button></p> */}
 </h3>

 <button className="btncart">Add To Cart</button>
 
   
 

 

 


</div>
<div className="d4">
  <img className="d2image" src={img5} onClick={()=>setimage("second")}/>

</div>
<div  className="d5">
<img className="d2image" src={img4} onClick={()=>setimage("third")}/>

</div>
        </div>
        {/* <h3>
           {cost} ,{description} ,{cost} ,{quantity}  
        </h3>
        <button onClick={()=>addproduct(product)}>add</button>
        <button onClick={()=>removeproduct(id)}>remove</button>
        <button  onClick={()=>deleteproduct(id)}>delete</button>
         */}
         
        </>
        )
}
var actions={
    addproduct,removeproduct,deleteproduct
}
export default connect(null,actions) (ProductDesCard);