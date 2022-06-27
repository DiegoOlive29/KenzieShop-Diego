import "./ProductsCart.css"
import { useDispatch } from "react-redux"
import { removeCartThunk } from "../../store/modules/cart/thunks"
function ProductsCart ({key,
    name,
    price,
    id,
    img,
    }){

        const dispatch = useDispatch()

    return(
        <div className="productCart">
            <img src={img} alt="" />
            
            <div className="productTextCart">
                <span className="nameCart"> {name.slice(0,20)}...</span>
                <span> R$ {price}</span>
                <button onClick={()=> dispatch(removeCartThunk(id))} className="btnCart">Remove</button>
            </div>
        </div>
    )


}export default ProductsCart