import React from "react"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import productsReducer from "./store/reducers/products"
import cartReducer from "./store/reducers/cart"
// import ShopNavigator from "./navigation/ShopNavigator"
import AppNavigator from "./navigation/AppNavigator"
import AppLoading from "expo-app-loading" // expo install expo-app-loading
import { useFonts } from "expo-font"
// import { composeWithDevTools } from "redux-devtools-extension" - //for debuging redux

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
})
///!!!!REMOVE composeWithDevTools for production!!!!!
const store = createStore(
  rootReducer
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
