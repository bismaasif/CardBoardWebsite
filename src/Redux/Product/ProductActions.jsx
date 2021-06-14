import { firestore } from "../../firebase/firebase";
import { product_set , product_clear} from "./ProductConstants";


export var fetchcategoryproduct=()=> async(dispatch)=>{
    try {
        var query= await firestore.collection("products").where("category","==","pizza").get();
        var products=[];
        query.docs.forEach((doc)=>{
            products.push({...doc.data(),id:doc.id});
        })
        // console.log(products)
        
        dispatch({
            type:product_set,
            payload:{products
                 }
                   })
        
    } catch (error) {
        console.log(error)
        
    }
    }

    export var clear=()=>async(dispatch)=>{
        try {
            dispatch({
                type: product_clear
            })
            
        } catch (error) {
            console.log(error)
        }
    }


    
export var fetchcategoryproduct1=()=> async(dispatch)=>{
    try {
        var query= await firestore.collection("products").where("category","==","shipping").get();
        var products=[];
        query.docs.forEach((doc)=>{
            products.push({...doc.data(),id:doc.id});
        })
        // console.log(products)
        
        dispatch({
            type:product_set,
            payload:{products
                 }
                   })
        
    } catch (error) {
        console.log(error)
        
    }
    }

    export var fetchspecificproduct=(productid)=>async(dispatch)=>{
        try {
            var query= await firestore.collection("products").doc(productid).get();
            var products=query.data();
          //  console.log(products)
            return products;
        } catch (error) {
            console.log(error)
        }
    }