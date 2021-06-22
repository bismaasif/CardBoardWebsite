import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { addproduct,removeproduct } from "../../Redux/Cart/CartActions";
import './CheckoutListItem.css';
import CartList from "../CartList/CartList";
import Designbox from "../Designbox/Designbox";
import CartTotal from "../../Utility/CartTotal";
import { useState } from "react";

const CheckoutListItem=({ addproduct,removeproduct,total,itemlist,...item})=>{
    var{id,quantity,cost,title}=item;
    var[debit,setdebit]=useState("nodebit")
    console.log(debit)
    return(
    <>


    <div className="checkoutbox1">
<div className="userinfo">

<div className="checkform">
<h3 className="deta">CONTACT DETAILS</h3>

Name<input className="checkinput1" type="text" placeholder="Name"/>  
<br/>
<br/>
Email<input className="checkinput3" type="text" placeholder="Email"/>
<br/>
<br/>
Phone<input className="checkinput5" type="text" placeholder="Phone"/>
<br/>
<br/>
Address<input className="checkinput4" type="text" placeholder="Address"/>
<br/>
<br/>

</div>
<p className="save"><input type="Checkbox"/> Save Contact Details</p>
<p className="payment">Payment Options</p>
<div className="ordero">
<p className="cash"><input type="radio"/> Cash on delivery</p><p className="debit"><input onClick={()=>setdebit("debit")} type="radio"/> Credit/Debit Card</p>
</div>
{debit==="debit"?
<div className="debitinfo">
    
Card Number<input className="checkinputa" type="text" placeholder="Card number"/>  
<br/>
<br/>
CardHolder Name<input className="checkinputb" type="text" placeholder="Crdholder Name"/>
<br/>
<br/>
Expiration Date<input className="checkinputc" type="text" placeholder="Date"/>
<br/>
<br/>
CVV<input className="checkinputd" type="text" placeholder="Number"/>
<br/>
<br/>
</div>:null}
<button className="checkbtn" >PLACE ORDER</button>
</div>

<div className="allproducts">
    <div className="bd">
    {itemlist.map((item)=><Designbox key={item.id} {...item}/>)}
    </div>
    <div className="bd1">
        <p className="ordercost">SubTotal - <b>$ {total}</b></p>
    </div>
</div>
    </div>

 {/* <h3>{cost}-{cost}</h3>
        <h1><button onClick={()=> addproduct(item)}>+</button >  {quantity}  
        <button onClick={()=> removeproduct(id)}>-</button></h1>
        <button>Place Order</button> */}
        
    </>
    )
}

var actions={
    addproduct,
    removeproduct
}
var mapState=(state)=>({
    total: CartTotal(state.cart),
    itemlist:state.cart
    
})
export default connect(mapState,actions)(CheckoutListItem);