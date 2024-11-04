import React from "react";

const Products = () => {
  return (
    <div className="w-11/12 mx-auto mt-80 border">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex m-4 gap-4">
        <div className="menu w-44 border gap-4 p-2 rounded-lg">
          <button className="p-2 bg-[#9538E2] rounded-lg text-white">
            All Product
          </button>
          <button className="p-2 bg-[#09080F0D] rounded-lg text-[#09080F99] hover:bg-[#9538E2] hover:text-white">
            All Product
          </button>
          <button className="p-2 bg-[#09080F0D] rounded-lg text-[#09080F99] hover:bg-[#9538E2] hover:text-white">
            All Product
          </button>
          <button className="p-2 bg-[#09080F0D] rounded-lg text-[#09080F99] hover:bg-[#9538E2] hover:text-white">
            All Product
          </button>
          <button className="p-2 bg-[#09080F0D] rounded-lg text-[#09080F99] hover:bg-[#9538E2] hover:text-white">
            All Product
          </button>
          <button className="p-2 bg-[#09080F0D] rounded-lg text-[#09080F99] hover:bg-[#9538E2] hover:text-white">
            All Product
          </button>
          <button className="p-2 bg-[#09080F0D] rounded-lg text-[#09080F99] hover:bg-[#9538E2] hover:text-white">
            All Product
          </button>
        </div>
        <div className="border p-3 shadow-md rounded-lg">
          <img
            className="rounded-lg border p-2 bg-[#D9D9D9]"
            src="https://i.ibb.co/CWWwdGn/stand.png"
            alt=""
          />
          <h4 className="mt-4 mb-3 font-bold">Dell XPS 13</h4>
          <p className="mt-4 mb-4">Price: 99.99k</p>
          <button className="btn btn-outline btn-xs text-[#9538E2] mb-5">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
