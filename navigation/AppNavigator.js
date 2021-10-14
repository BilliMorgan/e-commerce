import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

// import ShopNavigator from "./ShopNavigator"
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen"
import ProductDetailScreen from "../screens/shop/ProductDetailScreen"
const MyStack = createStackNavigator()

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen
          name="ProductsOverview"
          component={ProductsOverviewScreen}
        />
        <MyStack.Screen 
          name="ProductDetail"
          component={ProductDetailScreen}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
