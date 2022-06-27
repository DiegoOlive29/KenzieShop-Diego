import { legacy_createStore as createStore , combineReducers, applyMiddleware } from "redux";
import cartReducer from "./modules/cart/reducers";
import productsReducer from "./modules/products/reducers";
import thunk from "redux-thunk";
const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

const store = createStore(reducers,applyMiddleware(thunk))
export default store