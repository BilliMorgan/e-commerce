import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import { createStore } from "redux"
import ProductsOverviewScreen, {
  screenOptions,
} from "../screens/shop/ProductsOverviewScreen"
import Colors from "../constants/Colors"
import { Platform } from "react-native"
import ProductDetailScreen from "../screens/shop/ProductDetailScreen"
import CartScreen from "../screens/shop/CartScreen"
import { HeaderButtons } from "react-navigation-header-buttons"

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "aandroid" ? "white" : Colors.primary,
}

const ProductsStackNavigator = createStackNavigator()

export const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProductsStackNavigator.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={screenOptions}
      />
      <ProductsStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
      />
      <ProductsStackNavigator.Screen name="Cart" component={CartScreen} />
    </ProductsStackNavigator.Navigator>
  )
}
