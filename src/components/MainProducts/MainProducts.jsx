import Products from "../Products/Products"
import "./MainProducts.css"
import HeadersTop from "../Headers/Headers"

function MainProducts  (){
    return(
        <>
        
        <HeadersTop/>
        
        <div className="container">
            <div className="content">
                <Products/>
                <Products/>
                <Products/>
                <Products/>
            </div>
        </div>

        </>
    )


}export default  MainProducts