import "./Headers.css"
import { useHistory } from "react-router-dom";

function HeadersTop  (){
    
  const history = useHistory();

  function navegation(path) {
    return history.push(path);
  }

    return(
        <div className="headTop">

        <span className="Logo" onClick={()=>navegation("/")}> Kenzie Shop </span>
        
        <div className="buttons">
            <button className="btnHeard" onClick={()=>navegation("/Cart")}>Carrinho</button>
            <button className="btnHeard">Entrar</button>
        </div>
        
        </div>
    )


}export default HeadersTop