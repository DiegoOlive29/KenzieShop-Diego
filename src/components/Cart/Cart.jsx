import "./Cart.css";
import HeadersTop from "../Headers/Headers";
import ProductsCart from "../ProductsCart/ProductsCart";
import { useSelector } from "react-redux";
function Cart() {

  const cartItem = useSelector((store)=> store.cart)

  return (
    <>
      <HeadersTop />

      <div className="containerCart">
        <div className="contentCart">
       {cartItem.map((item) => (
            <ProductsCart
              key={item.id}
              name={item.name}
              price={item.price}
              id={item.id}
              img={item.img}
              item={item}
            />
          ))}
        </div>
        <div className="boxValue">
          <span className="title">
            Suas compras!
          </span>

          <span>{cartItem.length}</span>
            <button className="BtnPedido">Finalizar compra</button>
        </div>
      </div>
    </>
  );
}
export default Cart;
