import React from "react"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import productsReducer from "./store/reducers/products"
import cartReducer from "./store/reducers/cart"
import ordersReducer from "./store/reducers/orders"
import authReducer from './store/reducers/auth'
import AppNavigator from "./navigation/AppNavigator"
import AppLoading from "expo-app-loading"
import { useFonts } from "expo-font"
import ReduxThunk from 'redux-thunk'
// import { composeWithDevTools } from "redux-devtools-extension" - //for debuging redux in dev mode

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
})
///!!!!REMOVE composeWithDevTools for production!!!!!
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
  // composeWithDevTools()
)

export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
