import React from "react";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Header = ({}) => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Statistics</NavLink>
      <NavLink to="Dashboard">Dashboard</NavLink>
    </>
  );
  return (
    <div className="w-11/12 mx-auto bg-[#9538E2] rounded-lg mt-4 text-white">
      <div className="navbar flex justify-around items-center p-2">
        <div className="">
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="flex justify-center items-center gap-6">{links}</div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle bg-white text-black"
            >
              <div className="indicator">
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
                <span className="badge badge-sm indicator-item">
                  {/* {product.length} */}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle bg-white text-black ml-4"
            >
              <div className="indicator">
                {
                  <CiHeart className="text-2xl flex justify-center items-center" />
                }
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 mb-6 ">
        <h1 className="text-4xl font-bold mt-4 mb-4 ">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="mt-3 text-[#FFFFFF] mb-3 ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <button className="p-2 bg-[#FFFFFF] text-[#9538E2] rounded-lg mt-4 mb-40 font-semibold">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Header;
