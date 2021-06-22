import { connect } from "react-redux";
import './CartListItem.css';
import img5 from './../../Images/shoes.jpg';
import CartTotal from "../../Utility/CartTotal";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { addproduct,removeproduct,deleteproduct } from "../../Redux/Cart/CartActions";



const CartListItem=({ addproduct,removeproduct,deleteproduct,total,...item})=>{
    var {cost,title,quantity,coverPhoto,id}=item;
    return(
        <>
        <div className="carbox">
            <div className="displaypic">
<img className="fit" src={img5}/>
            </div>
 <h3 className="displaytext">{title}</h3>
 <p className="left">Lorem ipsum lorem ipsum lorem ipsum</p>
 
 <div className="qbox">
    <p className="dq">{quantity}</p>
    
 <div className="dq1"><p><ExpandLessIcon onClick={()=>addproduct(item)} fontSize="small"/></p><p> <ExpandMoreIcon onClick={()=> removeproduct(id)} fontSize="small"/> </p></div>
 </div>
 <div  className="displaycost">
    <h2>$-{cost}</h2>
 </div>
        {/* <h1><button onClick={()=> addproduct(item)}>+</button >  {quantity}  <button onClick={()=> removeproduct(id)}>-</button></h1> */}
        </div>
        
        </>

    )
}

var actions={
    addproduct,removeproduct,deleteproduct
}

export default connect(null,actions)(CartListItem);