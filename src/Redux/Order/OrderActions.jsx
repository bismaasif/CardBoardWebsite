import { firestore, serverTimestamp } from "../../firebase/firebase";
import history from "../../History/History";

export var OrderGenerator=()=>async(dispatch,getState)=>{
    try {
        var {auth,cart:product}=getState();
        // console.log(products)
        var orderinfo={
            ...auth,
            product,
            orderedat:serverTimestamp(),
            orderstatus:"pending"
        }
        console.log(orderinfo)
        var order= await firestore.collection("orders").add(orderinfo)
        history.push(`/checkout/${order.id}`);
        //console.log(history)
       // console.log(auth);
       // console.log(cart);
       //...
       // var state=getState();
       // console.log(state);
    } catch (error) {
        console.log(error)
    }
}