import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => addItemToCart(product);
  return (
    <div>
      <div> {name}</div>
      <img src={imageUrl} alt={name} width={200} height={200} />
      <div> {price}</div>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
