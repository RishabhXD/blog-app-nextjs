/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import catty from "../public/catty.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>XD Blog</title>
        <meta name="description" content="Blog Page for My Use" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              👋 Hi, I'm Rishabh XD
            </h1>
            <p className="mb-8 leading-relaxed">
              🧑‍🎓 I'm a Student, Developer and a Learner! <br />
              🖥️ I ❤️ to learn, develop and experiment with programs and awesome
              things on internet.
            </p>
            <div className="flex justify-center">
              <Link
                href="/blog"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Blogs
              </Link>
              <Link
                href="https://drive.google.com/file/d/17-pxuBItYCjEOYuRbwIiJkO8njE-mIIL/view?usp=sharing"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                target="_blank"
              >
                Resume
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              src={catty}
              alt="Picture of the author"
              width={750}
              height={600}
            />
          </div>
        </div>
      </section>
    </>
  );
}
