import { addCart, removeCart } from "./actions";

export const addCartThunk =(product) =>{
    return(dispatch)=>{
        const list = JSON.parse(localStorage.getItem('cart')) || []
        
        list.push(product)
        
        localStorage.setItem("cart",JSON.stringify(list));

        dispatch(addCart(product))
    }
}

export const removeCartThunk = (id)=> (dispatch,getStore) => {

    const{cart}=getStore()
    const list = cart.filter ((product)=> product.id !== id);

    localStorage.setItem('cart',JSON.stringify(list))

    dispatch(removeCart(list))
}