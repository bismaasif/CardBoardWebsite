import {connect} from 'react-redux'
import './ProductCard.css';
import { Link } from "react-router-dom";
import { checkauthstatus } from '../../Redux/auth/authActions';
import { addproduct } from '../../Redux/Cart/CartActions';
import { clear } from '../../Redux/Product/ProductActions';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useEffect } from 'react';

const ProductCard=({addproduct,user,checkauthstatus,...product})=>{
    
//     useEffect(async() => {
//         //cdm
//        await  checkauthstatus()
      
// return ()=>{
// clear()
// }
//             },[])
        const check=()=>{
return(
    alert("please sign in")
)
         }   
    var{quantity,cost,coverpic,id,title}=product;
    return(
<>
<div style={{fontSize:"62.5%"}}>

    
        <div className="product_card">
<div className="col">
    <Link to= {`/productdes/${id}`}>
        <div className="product_card_image">
           
           
             <img  className="cover" src={`${coverpic}`} alt="picture" />
             

             </div>
             </Link>
             <p className="headcost"><b>{title}</b></p>
             <p className="headcost1">${cost}</p>
         {/* {user ?  <button onClick={()=>addproduct(product)}>+</button> : <button onClick={()=>check()} >+</button>}   */}
          <button className="add" onClick={()=>addproduct(product)}><AddCircleOutlineIcon fontSize="large"/></button>
          
             {/* <br/>
             <br/> */}
             </div>
        </div>
        <br/> 
        <br/>
        </div>
        

</>

    )
}
var actions={
    addproduct,
    checkauthstatus,
    clear
}
var mapState=(state)=>({
    user:state.auth
})
export default connect(mapState,actions) (ProductCard);