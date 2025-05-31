import { CART_ACTION_TYPES } from "./cart.types";
const addToCart = (cartItems, productToAdd) => {
  const isExist = cartItems.find((item) => item.id === productToAdd.id);

  if (isExist) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeFromCart = (cartItems, cartItemToRemove) => {
  const isExist = cartItems.find((item) => item.id === cartItemToRemove.id);

  if (isExist.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((item) => item.id !== cartItemToRemove.id);
};

export const setCartIsOpen = (bool) => ({
  type: CART_ACTION_TYPES.SET_CART_IS_OPEN,
  payload: bool,
});

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addToCart(cartItems, productToAdd);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeFromCart(cartItems, cartItemToRemove);
  console.log(newCartItems,'newCartItems');
  
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const clearCartItem = (cartItems, cartItemToRemove) => {
  const newCartItems = clearItemFromCart(cartItems, cartItemToRemove);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
