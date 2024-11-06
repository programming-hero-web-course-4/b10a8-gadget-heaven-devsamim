import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const WishList = ({ product }) => {
  const { product_title, price, description, product_image } = product;

  return (
    <div className="w-2/3 mx-auto border rounded-lg gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 mt-10 ">
      <div className="flex m-4">
        <div>
          <img className="w-44 p-2" src={product_image} alt={product_title} />
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-xl font-bold ml-4">{product_title}</p>
            <IoIosCloseCircleOutline
              // onClick={handleRemoveCart}
              className="text-4xl text-red-600 absolute ml-[650px]"
            />
          </div>

          <p>Description: {description}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default WishList;
