import { combineReducers, createStore } from "redux"
import { cartReducer } from "./reducer"

const root = combineReducers({
    cartReducer,
  })

const store = createStore(root)
export default store
