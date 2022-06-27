import "./Products.css"

function Products (){
    return(
        <div className="product">
            <img src="https://resultadosdigitais.com.br/files/2015/08/por-do-sol-e1440783856626.jpg" alt="" />
            
            <div className="productText">
                <span className="name"> Nome</span>
                <span> Price</span>
                <button>Comprar</button>
            </div>
        </div>
    )


}export default Products