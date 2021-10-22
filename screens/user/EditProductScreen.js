import React, { useState, useEffect, useCallback } from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  _ScrollView,
  View,
  ScrollView,
  Platform,
} from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../../components/UI/HeaderButton"
import { useSelector, useDispatch } from "react-redux"
import * as productActioins from "../../store/actions/products"

const EditProductScreen = (props) => {
  const prodId = props.route.params ? props.route.params.productId : null
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  )
  const dispatch = useDispatch()

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "")
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  )
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  )
  const submitHandler = useCallback(() => {
    if (editedProduct) {
      dispatch(
        productActioins.updateProduct(prodId, title, description, imageUrl)
      )
    } else {
      dispatch(
        productActioins.createProduct(title, description, imageUrl, +price)
      )
    }
  }, [dispatch, prodId, title, description, imageUrl, price])
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName={
              Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
            }
            onPress={submitHandler}
          />
        </HeaderButtons>
      ),
    })
  }, [submitHandler])
  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export const screenOptions = (navData) => {
  const routeParams = navData.route.params ? navData.route.params : {}
  return {
    headerTitle: routeParams.productId ? "Edit Product" : "Add Product",
  }
}
const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "open-sans-bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
})

export default EditProductScreen
