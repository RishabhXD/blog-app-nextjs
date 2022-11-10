import React from "react";
import Link from "next/link";
import { AiOutlineGithub, AiFillLinkedin, AiFillMail , AiFillTwitterCircle} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-white"
        >
          <span className="ml-3 text-xl">XD Blog</span>
        </Link>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          <Link
            href="https://twitter.com/RishabhJSX"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @RishabhXD
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href="https://github.com/RishabhXD"
            className="text-gray-400"
            target="_blank"
          >
            <AiOutlineGithub fontSize={25} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rishabh-pant-42760919b/"
            className="ml-3 text-gray-400"
            target="_blank"
          >
            <AiFillLinkedin fontSize={25} />
          </Link>
          <Link
            href="mailto:rishabhcoding99@gmail.com"
            className="ml-3 text-gray-400"
          >
            <AiFillMail fontSize={25} />
          </Link>
          <Link
            href="https://twitter.com/RishabhJSX"
            className="ml-3 text-gray-400"
          >
            <AiFillTwitterCircle fontSize={25} />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
