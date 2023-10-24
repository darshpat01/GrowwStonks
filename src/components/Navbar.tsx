import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="py-4 bg-[#ab643e] ">
        <div className="container mx-auto flex items-center flex-wrap">
          <div className="px-4 text-xl font-bold">
            <Link href="/">
              <div className="text-2xl font-bold">GrowwStonks</div>
            </Link>
          </div>
          <div className="flex-grow"></div>
          <div className="px-4">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg py-2 px-4 text-black w-80"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
