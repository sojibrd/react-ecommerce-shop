import { createContext, useEffect, useState } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCartItem: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    return setCartItems(addToCart(cartItems, productToAdd));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    return setCartItems(removeFromCart(cartItems, cartItemToRemove));
  };
  const clearCartItem = (cartItemToRemove) => {
    return setCartItems(clearItemFromCart(cartItems, cartItemToRemove));
  };

  useEffect(() => {
    let count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    let cartTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setCartTotal(cartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setCartIsOpen,
    addItemToCart,
    removeItemFromCart,
    clearCartItem,
    cartItems,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
