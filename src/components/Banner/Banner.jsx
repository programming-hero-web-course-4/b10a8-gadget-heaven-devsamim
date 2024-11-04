import React from "react";

const Banner = () => {
  return (
    <div className="w-3/4 mx-auto mb-10 p-5 relative ">
      <div className="w-3/4  mx-auto border p-5 rounded-3xl  absolute -top-36  left-32">
        <img
          className="w-full h-[400px] border rounded-3xl bg-cover object-fill  "
          src="https://i.ibb.co/vcn2nkf/banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
