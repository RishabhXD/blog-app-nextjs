import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">XD Blog</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link href="/blog" className="mr-5 hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="mr-5 hover:text-white">
            Contact
          </Link>
          <Link href="/about" className="mr-5 hover:text-white">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
