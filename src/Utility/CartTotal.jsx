var CartTotal=(Cart)=>{
    var total=0;
    for (var {cost,quantity} of Cart)  total += cost*quantity;
       return total;
}
export default CartTotal;