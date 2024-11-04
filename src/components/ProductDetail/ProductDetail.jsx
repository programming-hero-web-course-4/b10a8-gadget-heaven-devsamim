import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();

  const items = data.find((product) => product.product_id === id);
  const {
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = items;

  return (
    <div>
      <h2>{}</h2>
    </div>
  );
};

export default ProductDetail;
