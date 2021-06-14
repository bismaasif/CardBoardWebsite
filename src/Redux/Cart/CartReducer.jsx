import { add_to_cart, delete_from_cart, remove_from_cart } from "./CartConstants";
import { productquantity,productremoval } from "../../Utility/Product";

var initialstate=[];
var CartReducer=(state=initialstate,action)=>{
    var {type,payload}=action;
    switch (type) {
     case add_to_cart:
         return productquantity(state,payload.product)
    case remove_from_cart:
        return productremoval(state,payload.productid)
        case delete_from_cart:
            return state.filter((product)=>product.id !== payload.productid)
        
     default:
      return state;
    }
}
export default CartReducer;