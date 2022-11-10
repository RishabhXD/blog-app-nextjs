/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import profilePic from "../public/profilePic.jpg";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Blog Page for My Use" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={profilePic}
            width={750}
            height={600}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hey, I'm Rishabh
            </h1>
            <p className="leading-relaxed mb-8">
              I'm a Full Stack Web3 developer currently in my junior year of
              engineering. <br />I love to create and learn new tech in the
              field of development. <br />I study with the help of projects and
              contributions.
            </p>
            <div className="flex justify-center">
              <Link
                href="https://github.com/RishabhXD"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                <AiOutlineGithub fontSize={25} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rishabh-pant-42760919b/"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                <AiFillLinkedin fontSize={25} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
