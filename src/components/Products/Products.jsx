import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./allProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mt-80">
      <h2 className="text-center text-2xl font-semibold mb-8 ">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex w-11/12 mx-auto h-[410px] ">
        <div className="menu w-44 border gap-4 p-2 rounded-lg mt-[11px]">
          <button className="p-2 bg-[#9538E2] rounded-lg text-white">
            {/* {products.category} */}
            All Product
          </button>
          <button className="p-2 bg-[#09080F0D] rounded-lg text-[#09080F99] hover:bg-[#9538E2] hover:text-white">
            All Product
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3">
          {products.map((product) => (
            <Product product={product} key={product.product_id}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
