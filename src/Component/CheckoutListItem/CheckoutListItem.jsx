import { connect } from "react-redux";
import { addproduct,removeproduct } from "../../Redux/Cart/CartActions";
const CheckoutListItem=({ addproduct,removeproduct,...item})=>{
    var{id,quantity,cost,title}=item;
    return(<>
 <h3>{cost}-{cost}</h3>
        <h1><button onClick={()=> addproduct(item)}>+</button >  {quantity}  
        <button onClick={()=> removeproduct(id)}>-</button></h1>
    </>
    )
}
var actions={
    addproduct,
    removeproduct
}
export default connect(null,actions)(CheckoutListItem);