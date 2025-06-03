import { useDispatch } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";

const CheckoutItem = ({ checkoutItem }) => {
  const { id, name, price, imageUrl, quantity } = checkoutItem;
  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItemToCart(checkoutItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(checkoutItem));
  const clearItemHandler = () => dispatch(clearItemFromCart(checkoutItem));

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
            <button onClick={addItemHandler}>+</button>
          </div>
          {quantity}
          <div>
            <button onClick={removeItemHandler}>-</button>
          </div>
        </td>
        <td>{price}</td>
        <td onClick={clearItemHandler}>X</td>
      </tr>
    </>
  );
};
export default CheckoutItem;
