import { connect } from "react-redux";
import { addproduct,removeproduct,deleteproduct } from "../../Redux/Cart/CartActions";



const CartListItem=({ addproduct,removeproduct,deleteproduct,...item})=>{
    var {cost,title,quantity,coverPhoto,id}=item;
    return(
        <>
 <h3>{title}-{cost}</h3>
        <h1><button onClick={()=> addproduct(item)}>+</button >  {quantity}  <button onClick={()=> removeproduct(id)}>-</button></h1>
        </>

    )
}

var actions={
    addproduct,removeproduct,deleteproduct
}
export default connect(null,actions)(CartListItem);