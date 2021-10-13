import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

// import ShopNavigator from "./ShopNavigator"
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen"

const MyStack = createStackNavigator()

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen
          name="ProductsOverview"
          component={ProductsOverviewScreen}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
