import CheckoutList from "../../Component/CheckoutList/CheckoutList";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import './Checkout.css'

const Checkout=()=>{
    return(
        <>
        <Navbar/>

        <h3>CHECKOUT</h3>
        <CheckoutList/>
        <hr className="line"/>
        <Footer/>
        </>
        
        )
}
export default Checkout;