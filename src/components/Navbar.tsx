import React from "react";
import Link from "next/link";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import Image from "next/image";
// load from images folder
import logo from "../../public/gl2.png";

const Navbar = () => {
  return (
    <>
      <div className="py-4 bg-growwOrange">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-2">
          <div className="px-4 text-xl font-bold py-1">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src={logo}
                  alt="logo"
                  width={40}
                  height={40}
                  className="cursor-pointer pr-2"
                />
                <div className="text-2xl font-bold text-white">GrowwStonks</div>
              </div>
            </Link>
          </div>
          <div className="px-4 py-1 min-w-[50%]">
            <input
              type="text"
              placeholder="Search stocks and etfs"
              className="border-none rounded-full w-full py-2 px-4 text-black dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-growwOrange focus:border-transparent"
            />
          </div>
          <div className="pl-2 py-1">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
