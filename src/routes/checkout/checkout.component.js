import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <>
      <table border={1} style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>image</td>
            <td>quantity</td>
            <td>price</td>
            <td>remove</td>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} checkoutItem={item} />
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total: ${cartTotal}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Checkout;
