import { product_clear, product_set } from "./ProductConstants";

var initialstate=[];
var ProductReducer=(state=initialstate,action)=>{
    var {type,payload}=action;
    switch (type) {
      case product_set:
          return [...payload.products]
       case product_clear:
         return []
        
     default:
      return state;
    }
}
export default ProductReducer;