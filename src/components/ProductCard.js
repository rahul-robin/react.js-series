import { productList } from "../utis/constant";
import Product from "./Product";

export const ProductCard = () => {
  return (
    <div className="product-card">
      {productList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

