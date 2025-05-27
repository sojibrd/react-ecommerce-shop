import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ checkoutItem }) => {
  const { cartItems, addItemToCart, removeItemFromCart, clearCartItem } =
    useContext(CartContext);
  const { id, name, price, imageUrl, quantity } = checkoutItem;
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>
          <img src={imageUrl} alt={name} width={200} height={200} />
        </td>
        <td>
          <div>
            <button onClick={() => addItemToCart(checkoutItem)}>+</button>
          </div>
          {quantity}
          <div>
            <button onClick={() => removeItemFromCart(checkoutItem)}>-</button>
          </div>
        </td>
        <td>{price}</td>
        <td onClick={() => clearCartItem(checkoutItem)}>X</td>
      </tr>
    </>
  );
};
export default CheckoutItem;
