import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product);
  const { product_title, product_image, product_id, category, price } = product;
  return (
    <div className="w-11/12 mx-auto mt-30  m-2 rounded-lg">
      <div className="flex gap-2 m-2">
        <div className="border p-3 shadow-md rounded-lg">
          <img
            className="rounded-lg border p-2 w-60 "
            src={product_image}
            alt=""
          />
          <h4 className="mt-4 mb-3 font-bold">{product_title}</h4>
          <p className="mt-4 mb-4">Price: {price}k</p>

          <div className="text-center mt-4">
            <Link to={`/products/${product_id}`}>
              <button className="btn btn-outline btn-xs text-[#9538E2] mb-5">
                Show Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
