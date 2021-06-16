import CartList from "../CartList/CartList";
import { OrderGenerator } from "../../Redux/Order/OrderActions";
import { connect } from "react-redux";


const Cart=({OrderGenerator})=>{
    return(
        <>
        <h3>CART</h3>
        <CartList/>
<button onClick={OrderGenerator} >Checkout</button>
        </>
        )
}
var actions={
    OrderGenerator
}
export default connect(null,actions)(Cart);