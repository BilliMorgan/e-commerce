import React from "react"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import productsReducer from "./store/reducers/products"
// import ShopNavigator from "./navigation/ShopNavigator"
import AppNavigator from "./navigation/AppNavigator"



const rootReducer = combineReducers({
  products: productsReducer,
})
const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}
