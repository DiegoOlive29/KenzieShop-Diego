import "./Cart.css";
import HeadersTop from "../Headers/Headers";
import ProductsCart from "../ProductsCart/ProductsCart";
function Cart() {
  return (
    <>
      <HeadersTop />

      <div className="containerCart">
        <div className="contentCart">
          <ProductsCart />
          <ProductsCart />
          <ProductsCart />
          <ProductsCart />
        </div>
        <div className="boxValue">
          {" "}
          <span className="title">
            Suas compras!
          </span>
          <span>Unidade: 5</span>
            <button className="BtnPedido">Finalizar compra</button>
        </div>
      </div>
    </>
  );
}
export default Cart;
