import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

const Header = () => {
  return (
    <div className="bg-white backdrop-blur-lg bg-white/50 overflow-auto object-cover w-screen bg-center bg-cover bg-no-repeat sticky top-0 z-10">
      <div className=" backdrop-blur-lg drop-shadow-lg flex px-8 md:px-80  py-2 items-center justify-between">
        <Link href="/">
          <div className="shrink-0 flex py-1 items-center justify-center">
            <Image src={logo} alt="MIS logo" width={100} height={50} />
          </div>
        </Link>

        <div className="flex flex-col-1 items-center text-blue-900  ">
          <button
            className="pr-8 max-sm:pr-3 text-[10px] md:text-[14px]"
            onClick={() => {}}
          >
            About us
          </button>
          <Link
            href="/contact"
            className="pr-8 max-sm:pr-3 text-[10px] md:text-[14px]"
          >
            Contact Us
          </Link>
          <Link
            href="/blog"
            className="pr-8 max-sm:pr-3 text-[10px] md:text-[14px]"
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
