import { connect } from "react-redux";
import CheckoutListItem from "../CheckoutListItem/CheckoutListItem";
import './CheckoutList.css'
const CheckoutList=({itemlist})=>{
    return(
    <>
    <div className="checkoutbox">
     {itemlist.map((item)=><CheckoutListItem key={item.id} {...item}/>)}
     </div>
    </>
    )
}
var mapState=(state)=>({
    itemlist:state.cart
})
export default connect(mapState) (CheckoutList);