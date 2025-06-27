import { useState } from "react";
import { productList } from "../utis/constant";
import Product from "./Product";

export const ProductCard = () => {
  const [listOfProducts, setListOfProducts] = useState(productList);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            const filteredProducts = listOfProducts.filter(
              (product) => product.rating.rate >= 4
            );
            setListOfProducts(filteredProducts);
          }}
          style={{ marginTop: "10px" }}
        >
          Top rated products
        </button>
      </div>
      <div className="product-card">
        {listOfProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

