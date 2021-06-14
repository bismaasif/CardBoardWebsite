import { add_to_cart, delete_from_cart, remove_from_cart } from "./CartConstants"

export var addproduct=(product)=>async(dispatch)=>{
    try {
        dispatch({
            type:add_to_cart,
            payload:{
                product
            }
        })
        
    } catch (error) {
        console.log(error)
    }
}

export var removeproduct=(productid)=>async(dispatch)=>{
try {
    dispatch({
        type:remove_from_cart,
        payload:{
            productid
        }
    })
    
    
} catch (error) {
    console.log(error)
}
}
export var deleteproduct=(productid)=>async(dispatch)=>{
    try {
        dispatch({
            type:delete_from_cart,
            payload:{
                productid
            }
        })
        
        
    } catch (error) {
        console.log(error)
    }
    }