import { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component.jsx";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import CategoryPreview from "../../components/category-preview/category-preview.component.jsx";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
export default CategoriesPreview;
