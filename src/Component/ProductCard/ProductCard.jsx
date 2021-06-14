import {connect} from 'react-redux'
import './ProductCard.css';
import { Link } from "react-router-dom";

import { addproduct } from '../../Redux/Cart/CartActions';

const ProductCard=({addproduct,...product})=>{
    var{quantity,cost,coverpic,id}=product;
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
             <p className="head">{cost}</p><br/>
             <button onClick={()=>addproduct(product)}>+</button>
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
    addproduct
}
export default connect(null,actions) (ProductCard);