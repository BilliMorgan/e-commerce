import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import {ShopNavigator } from "./ShopNavigator"

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
