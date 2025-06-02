import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import Loading from "../../components/loading/loading.component";

const Category = () => {
  const { category } = useParams();
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap); 
  const [products, setProducts] = useState(categoriesMap[category]);


  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Category;
