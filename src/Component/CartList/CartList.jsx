import {connect} from "react-redux";
import CartListItem from "../CartListItem/CartListItem";

const CartList=({itemlist})=>{
    console.log(itemlist)
    return(
        <>

{itemlist.map((item)=><CartListItem key={item.id} {...item}/>)}
        </>
        )
}
var mapState=(state)=>({
    itemlist:state.cart
})
export default connect (mapState)(CartList);