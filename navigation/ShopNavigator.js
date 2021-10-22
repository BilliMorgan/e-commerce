import React from "react"
import { Platform, SafeAreaView, View } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer"
import { createStore } from "redux"
import ProductsOverviewScreen, {
  screenOptions as productOverviewOptions,
} from "../screens/shop/ProductsOverviewScreen"
import ProductDetailScreen, {
  screenOptions as productDetialScreenOptions,
} from "../screens/shop/ProductDetailScreen"
import CartScreen, {
  screenOptions as cartScreenOptions,
} from "../screens/shop/CartScreen"
import OrdersScreen, {screenOptions as orderScreenOptions} from "../screens/shop/OrdersScreen"
import UserProductsScreen, {screenOptions as userProductsScreenOptions} from "../screens/user/UserProductsScreen"
import EditProductScreen, {
  screenOptions as editProductScreenOptions,
} from "../screens/user/EditProductScreen"
import Colors from "../constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { useDispatch } from "react-redux"

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
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
}


const ProductsStackNavigator = createStackNavigator()
const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProductsStackNavigator.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={productOverviewOptions}
        />
      <ProductsStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={productDetialScreenOptions}
        />
      <ProductsStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={cartScreenOptions}
        />
    </ProductsStackNavigator.Navigator>
  )
}

const AdminStackNavigator = createStackNavigator()
const AdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AdminStackNavigator.Screen
        name="UserProducts"
        component={UserProductsScreen}
        options={userProductsScreenOptions}
      />
      <AdminStackNavigator.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={editProductScreenOptions}
      />
      {/* <AdminStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={cartScreenOptions}
      /> */}
    </AdminStackNavigator.Navigator>
  )
}

const OrdersStackNavigator = createStackNavigator()
const OrdersNavigator = () => {
  return (
    <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <OrdersStackNavigator.Screen
        name="OrdersOverview"
        component={OrdersScreen}
        options={orderScreenOptions}
        />
    </OrdersStackNavigator.Navigator>
  )
}

const ShopDrawerNavigator = createDrawerNavigator()
export const ShopNavigator = () => {
  const dispatch = useDispatch()
  return (
    <ShopDrawerNavigator.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <DrawerItemList {...props} />
            </SafeAreaView>
          </View>
        )
      }}
      screenOptions={{
        activeTintColor: Colors.primary,
        headerShown: false,
      }}
    >
      <ShopDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </ShopDrawerNavigator.Navigator>
  )
}
