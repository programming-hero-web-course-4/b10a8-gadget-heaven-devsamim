import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addStoreCartList } from "../Utility/store";
import { addWishList } from "../Utility/store";
import { CiHeart } from "react-icons/ci";

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
  const handleCartList = (id) => {
    // console.log(alert("hi"));
    addStoreCartList(id);
  };
  const handleWishList = (id) => {
    // console.log(alert("hi"));
    addWishList(id);
  };

  return (
    <div className="w-3/4 mx-auto mb-10 p-5 relative ">
      <div className="w-3/4  mx-auto border p-5 rounded-3xl  absolute -top-36  left-32">
        <div className="lg:flex justify-center items-center mt-32 p-2 gap-8">
          <div>
            <img src={product_image} alt="" />
          </div>
          <div>
            <h3 className="font-bold text-xl">{product_title}</h3>
            <p className="mt-2 mb-2">Price : ${price}</p>
            <button
              className={` btn btn-xs ${
                availability
                  ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              }`}
              disabled={!availability}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </button>
            <p className="mt-3 mb-4">{description}</p>
            <p>
              <strong>Specification:</strong>
              <ol className="list-decimal ml-5 mt-2">
                {Specification.map((specific, index) => (
                  <li key={index}>{specific}</li>
                ))}
              </ol>
            </p>
            <p className="mt-2">
              <strong>Rating :</strong>{" "}
              <span className="border p-1 rounded-lg ml-2 bg-slate-100">
                {rating}
              </span>
              <span className="ml-2">⭐</span>
            </p>
            <div className="flex items-center gap-6 mt-6">
              <button
                onClick={() => handleCartList(product_id)}
                className="btn bg-[#9538E2] text-white"
              >
                Add to cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleWishList(product_id)}
                className="btn rounded-full"
              >
                <CiHeart className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
