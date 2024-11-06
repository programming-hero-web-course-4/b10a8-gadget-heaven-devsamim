import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { getStoreCartList, addStoreCartList } from "../Utility/store";
import { getWishList } from "../Utility/store";
import Dashboard from "./Dashboard";
import WishList from "./WishList/WishList";

const ListedProducts = () => {
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [view, setView] = useState("cart");
  const allProduct = useLoaderData();
  const [sortedProducts, setSortedProducts] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const handleSort = () => {
    let sortedList = [...allProduct];

    sortedList.sort((a, b) => b.price - a.price);

    setSortedProducts(sortedList); // Set the sorted list to sortedProducts state
    setIsSorted(!isSorted); // Toggle sorting state for re-render
  };

  const handleAddToCart = (product) => {
    addStoreCartList(product.product_id);
    const updatedCartList = getStoreCartList();
    const cartProductList = allProduct.filter((prod) =>
      updatedCartList.includes(prod.product_id)
    );
    setCartList(cartProductList);
  };

  const handleRemoveCart = (product) => {
    removeStoreCartList(product.product_id);
    const updatedCartList = getStoreCartList();
    const cartProductList = allProduct.filter((prod) =>
      updatedCartList.includes(prod.product_id)
    );
    setCartList(cartProductList);
  };

  useEffect(() => {
    const storeCartList = getStoreCartList();
    const cartProductList = allProduct.filter((product) =>
      storeCartList.includes(product.product_id)
    );
    setCartList(cartProductList);
  }, [allProduct]);

  useEffect(() => {
    const wishReadList = getWishList();
    const storeWishListInt = wishReadList.map((id) => parseInt(id));
    const wishBookList = allProduct.filter((product) =>
      storeWishListInt.includes(product.product_id)
    );
    setWishList(wishBookList);
  }, [allProduct]);

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  return (
    <div>
      <div>
        <h2 className="mt-6 text-4xl text-center font-bold bg-[#1313130D] p-4 w-11/12 mx-auto rounded-lg mb-4">
          Dashboard
          <div className="mt-10 mb-6">
            <button
              className="btn btn-outline btn-success ml-6 font-bold p-2"
              onClick={() => handleViewChange("cart")}
            >
              Cart
            </button>
            <button
              className="btn btn-outline btn-warning font-bold p-2 m-4"
              onClick={() => handleViewChange("wishlist")}
            >
              Wishlist
            </button>
          </div>
        </h2>

        <div className="flex justify-between gap-8 items-center w-11/12 mx-auto">
          <div>{view === "cart" ? "Cart" : "Wishlist"}</div>
          <div>
            <button
              className="btn bg-[#9538E2] text-white p-3 m-4"
              onClick={handleSort}
            >
              Sort by Price
            </button>
            <button className="btn hover:bg-[#9538E2] hover:text-white">
              Purchase
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        {view === "cart" && cartList.length > 0 && (
          <div>
            {cartList.map((product) => (
              <Dashboard cart={product} key={product.product_id}></Dashboard>
            ))}
          </div>
        )}
        {view === "cart" && cartList.length === 0 && ""}

        {view === "wishlist" && wishList.length > 0 && (
          <div>
            {wishList.map((product) => (
              <WishList key={product.product_id} product={product} />
            ))}
          </div>
        )}
        {view === "wishlist" && wishList.length === 0 && (
          <p>Your wishlist is empty.</p>
        )}
      </div>

      <div className="w-11/12 mx-auto mt-6">
        <div className="w-2/3 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6">
          {(isSorted ? sortedProducts : allProduct).map((product) => (
            <div className="border rounded-lg gap-8" key={product.product_id}>
              <div className="flex m-4">
                <div>
                  <img
                    className="w-44 p-2"
                    src={product.product_image}
                    alt={product.product_title}
                  />
                </div>
                <div className="gap-4 pl-6">
                  <div className="flex justify-between relative">
                    <p className="text-xl font-bold">{product.product_title}</p>
                    <IoIosCloseCircleOutline
                      onClick={() => handleRemoveCart(product)}
                      className="text-4xl text-red-600 absolute ml-[650px]"
                    />
                  </div>

                  <p>Description: {product.description}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedProducts;
