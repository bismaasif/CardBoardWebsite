import { addproduct,removeproduct,deleteproduct } from "../../Redux/Cart/CartActions"; 
import { connect } from "react-redux";
  const ProductDesCard=({addproduct,removeproduct,deleteproduct,...product})=>{
    var{id,description,cost,quantity}=product;
    return(
        <>
        <h3>
           {cost} ,{description} ,{cost} ,{quantity}  
        </h3>
        <button onClick={()=>addproduct(product)}>add</button>
        <button onClick={()=>removeproduct(id)}>remove</button>
        <button  onClick={()=>deleteproduct(id)}>delete</button>
        
        </>
        )
}
var actions={
    addproduct,removeproduct,deleteproduct
}
export default connect(null,actions) (ProductDesCard);