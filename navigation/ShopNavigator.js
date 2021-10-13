import { createStackNavigator, createAppContainer } from "react-navigation"
import { createStore } from "redux"
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen"
import Colors from "../constants/Colors"
import { Platform } from "react-native"

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android'? Colors.primary : '',
      },
      headerTintColor: Platform.OS === 'aandroid' ? "white": Colors.primary,
    },
  }
)

export default createAppContainer()