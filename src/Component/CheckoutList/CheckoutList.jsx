import { connect } from "react-redux";
import CheckoutListItem from "../CheckoutListItem/CheckoutListItem";
const CheckoutList=({itemlist})=>{
    return(
    <>
     {itemlist.map((item)=><CheckoutListItem key={item.id} {...item}/>)}
    </>
    )
}
var mapState=(state)=>({
    itemlist:state.cart
})
export default connect(mapState) (CheckoutList);