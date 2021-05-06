import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import AuthReducer from "./reducers/AuthReducer"
const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store=createStore(AuthReducer,compose(applyMiddleware(thunk),devtools))
export default store