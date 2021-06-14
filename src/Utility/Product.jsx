export var productquantity=(existingproduct,newproduct)=>{
    var exist=existingproduct.some((existingproduct)=>existingproduct.id===newproduct.id)
    if(!exist){

        return [...existingproduct,{...newproduct,quantity:1}]
    }
    else{
        return existingproduct.map((existingproduct)=>
            { if (existingproduct.id===newproduct.id){
                return {
                    ...existingproduct,
                    quantity: existingproduct.quantity + 1
                }

            }
            else{
                return existingproduct;
            }
            })
        
    }
}

export var productremoval=(existingproduct,newproductid)=>{
    var product=existingproduct.find((existingproduct)=>existingproduct.id===newproductid)
    if(product){
        if(product.quantity>0){
            return existingproduct.map((existingproduct)=>{if(existingproduct.id===newproductid){
                return {
                    ...existingproduct,
                    quantity:existingproduct.quantity - 1
                        }
        }else{
            return existingproduct;
        }
    })
        }
        else{
            return existingproduct.filter((existingproduct)=>existingproduct.id !== newproductid)
        }

    }
    else{
        return existingproduct;
    }
   

}