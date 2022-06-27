import "./MainProducts.css";
import HeadersTop from "../Headers/Headers";
import Products from "../Products/Products";
import { useSelector } from "react-redux";

function MainProducts() {
  const productsItem = useSelector((store) => store.products);

  return (
    <>
      <HeadersTop />

      <div className="container">
        <div className="content">
          {productsItem.map((item) => (
            <Products
              key={item.id}
              name={item.name}
              price={item.price}
              id={item.id}
              img={item.img}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default MainProducts;
