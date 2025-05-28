import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <div>
      <h2>
        <span>{title}</span>
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
