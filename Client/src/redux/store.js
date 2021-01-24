import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { getProducts } from "./actions/actions";

const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)))

console.log(store.getState())
//store.dispatch(getProducts('ford'))
export default store