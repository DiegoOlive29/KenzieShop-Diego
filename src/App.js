
import HeadersTop from "./components/Headers/Headers";
import { Switch, Route } from 'react-router-dom';
import CartPage from "./pages/CartPage/index";
import DashBoard from "./pages/DashBoard/index";
function App() {
  return (
    <div className="App">

    <Switch>
      <Route exact path={"/"}>
          
        <DashBoard/>
        
      </Route>


      <Route  path={"/Cart"}>
          <CartPage/>
          
      </Route>

      
    </Switch>
    </div>
  );
}

export default App;
