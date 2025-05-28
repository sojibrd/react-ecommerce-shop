const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src={imageUrl} alt={name} width={50} height={50} />
      </div>
      <div>
        <div>{name}</div>
        <div>
          {quantity} x {price}
        </div>
      </div>
    </div>
  );
};
export default CartItem;
