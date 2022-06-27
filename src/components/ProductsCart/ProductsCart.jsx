import "./ProductsCart.css"

function ProductsCart (){
    return(
        <div className="productCart">
            <img src="https://resultadosdigitais.com.br/files/2015/08/por-do-sol-e1440783856626.jpg" alt="" />
            
            <div className="productTextCart">
                <span className="nameCart"> Nome</span>
                <span> Price</span>
                <button className="btnCart">Comprar</button>
            </div>
        </div>
    )


}export default ProductsCart