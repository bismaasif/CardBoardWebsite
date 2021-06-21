import {connect} from "react-redux";
import CartListItem from "../CartListItem/CartListItem";
import './CartList.css'

const CartList=({itemlist})=>{
    console.log(itemlist)
    return(
        <>
<div className="box">
{itemlist.map((item)=><CartListItem key={item.id} {...item}/>)}
</div>
        </>
        )
}
var mapState=(state)=>({
    itemlist:state.cart
})
export default connect (mapState)(CartList);