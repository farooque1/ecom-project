import { ADD_TO_CART, CLEAR_CART, REMOVE_TO_CART } from "./Constant"


export const Addtocart=(data)=>{
    console.log("ADD TO CART ACTION",data);
    return {
        type:ADD_TO_CART,
        data,
    }
}

export const removetocart=(remove)=>{
    console.log("REMOVE TO CART ACTION",remove);
    return {
        type:REMOVE_TO_CART,
        remove,
    }
}

export const clearcart=()=>{
    console.log("Clear CART ACTION");
    return {
        type:CLEAR_CART,
    }
}