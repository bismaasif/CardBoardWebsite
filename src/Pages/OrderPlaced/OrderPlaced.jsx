import './OrderPlaced.css';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import { Link } from 'react-router-dom';
const OrderPlaced=()=>{
    return(
        <>
        <Navbar/>
        <div className="order-placed">
<h2 className="tan">THANKYOU FOR SHOPPING WITH US</h2>
<div className="pgraph">
<p>thankyou for shopping with us</p>
<p>akdhlUIASDuid,siaxhk.zchKSCSKJakdhlUIASDuid,siaxhk.zchKSCSKJ</p>
<p>jaSDG,USA,as xfedgyfshgdsj,</p>
</div>
        </div>
        <Link to="/">
            <button className="continue">Continue</button>
            </Link>
            <hr className="line"/>
        <Footer/>
        </>
    )
}
export default OrderPlaced;