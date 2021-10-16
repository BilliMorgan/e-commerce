export const ADD_ORDER = 'ADD_ORDER'

const AddOrder = (cartItems, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderData: {items: cartItems, amount: totalAmount}
  }
}