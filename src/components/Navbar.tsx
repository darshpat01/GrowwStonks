import React from "react";
import Link from "next/link";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Navbar = () => {
  return (
    <>
      <div className="py-4 bg-growwOrange">
        <div className="container mx-auto flex items-center flex-wrap justify-between px-2">
          <div className="px-4 text-xl font-bold">
            <Link href="/">
              <div className="text-2xl font-bold text-white">GrowwStonks</div>
            </Link>
          </div>
          <div className="px-4">
            <input
              type="text"
              placeholder="Search"
              className="border-none rounded-full py-2 px-4 text-black dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-growwOrange focus:border-transparent"
            />
          </div>
          <div className="pl-2">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
