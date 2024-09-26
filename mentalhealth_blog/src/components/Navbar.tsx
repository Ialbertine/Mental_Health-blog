"use client";
import { useState } from 'react';
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#071a58]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white font-bold text-xl cursor-pointer">Mental Health Blog</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="capitalize cursor-pointer text-xl text-gray-300 hover:text-[#e3770c] px-3 py-2 rounded-md font-medium">
                Home
              </Link>
              <Link href="/about" className="capitalize cursor-pointer text-xl text-gray-300 hover:text-[#e3770c] px-3 py-2 rounded-md font-medium">
                About
              </Link>
              <Link href="/blog" className="capitalize cursor-pointer text-xl text-gray-300 hover:text-[#e3770c] px-3 py-2 rounded-md  font-medium">
                Blog
              </Link>
              <Link href="/contact" className="capitalize cursor-pointer text-xl text-gray-300 hover:text-[#e3770c] px-3 py-2 rounded-md font-medium">
                Contact
              </Link>
            </div>
          </div>
          {/* responsive menu */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-3xl inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#e3770c]  focus:outline-none"
            >
              {isOpen ? <IoMdClose /> : <RiMenu3Line />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/blog" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
            <Link href="/contact" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
