import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenuClick = () => setToggleMenu(!toggleMenu);
  return (
    <>
      <div className="text-white z-10 w-screen absolute">
        <div className="flex flex-row justify-between py-3 px-6">
          <div className="flex font-roboto font-semibold py-2 md:text-2xl text-3xl">
            IRADATH
          </div>
          <div className=" hidden text-slate-300 py-2 lg:flex lg:text-lg ">
            <Link href="#" className="px-4">
              Home
            </Link>
            <Link href="#" className="px-4">
              About Us
            </Link>
            <Link href="#" className="px-4">
              Services
            </Link>
            <Link href="#" className="px-4">
              Education
            </Link>
            <Link href="#" className="px-4">
              Private Funds
            </Link>
            <Link href="#" className="px-4">
              Contact Us
            </Link>
          </div>
          <div className="hidden lg:flex flex-row items-center">
            <div className=" text-lg px-4 py-2">
              <button className="w-full"> Login</button>
            </div>
            <div className="px-4 bg-[#72E485] font-semibold text-black py-2 rounded-md hover:bg-[#2e7139] hover:text-white ">
              <button className="w-full">Sign Up</button>
            </div>
          </div>

          <div className="lg:hidden" onClick={handleMenuClick}>
            {!toggleMenu ? (
              <Bars3Icon className="w-8" />
            ) : (
              <XMarkIcon className="w-8"></XMarkIcon>
            )}
          </div>
        </div>
        {toggleMenu && (
          <div className="flex  bg-[#404040] flex-col text-lg w-full items-center lg:hidden">
            <Link href="#" className="py-3">
              Home
            </Link>
            <Link href="#" className="py-3">
              About Us
            </Link>
            <Link href="#" className="py-3">
              Services
            </Link>
            <Link href="#" className="py-3">
              Education
            </Link>
            <Link href="#" className="py-3">
              Private Funds
            </Link>
            <Link href="#" className="py-3">
              Contact Us
            </Link>

            <div className="border rounded-md w-1/2 text-center py-2 hover:bg-black">
              <button className="w-full">Login</button>
            </div>
            <div className=" my-3 py-2 rounded-md bg-[#72E485] w-1/2 text-center text-black hover:bg-[#2e7139] hover:text-white">
              <button className="w-full">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}