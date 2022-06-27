import { useDispatch } from "react-redux"
import "./Products.css"
import {addCart } from '../../store/modules/cart/actions'
import { addCartThunk } from "../../store/modules/cart/thunks"
function Products ({name,price,item,img}){

    const dispatch = useDispatch()

    return(
        <div className="product">
            <img className="ImagemProduct" src={img} alt={name} />
            
            <div className="productText">
                <span className="name">{name} </span>
                <span> R$ {price}</span>
                <button onClick={()=> dispatch(addCartThunk(item))} className="btnProduct">Comprar</button>
            </div>
        </div>
    )


}export default Products