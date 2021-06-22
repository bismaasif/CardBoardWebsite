import CartList from "../CartList/CartList";
import { OrderGenerator } from "../../Redux/Order/OrderActions";
import { connect } from "react-redux";
import CartTotal from "../../Utility/CartTotal";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from "react-router-dom";
import './Cart.css';


const Cart=({OrderGenerator,total})=>{
    return(
        <>
        <Navbar/>
        <div className="area">
        <Link to="/product">
        <p className="return"><ArrowBackIosIcon/> Return to All Products</p></Link><p className="viewlist"><FavoriteBorderOutlinedIcon/> View wishlist</p>
        <h3 className="ysc">Your Shopping Cart <ShoppingCartOutlinedIcon fontSize="large" className="iconshop"/></h3>
        <CartList/>
        <div className="cartbox">
        <p className="stotal">SubTotal</p>  <h3 className="totalcost">${total}</h3>
        </div>
<button className="checkoutbtn" onClick={OrderGenerator} >Checkout</button>
</div>
<Footer/>
        </>
        )
}
var actions={
    OrderGenerator
}
var mapState=(state)=>({
    total: CartTotal(state.cart)
})
export default connect(mapState,actions)(Cart);