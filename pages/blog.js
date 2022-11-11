/* eslint-disable react/jsx-key */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";

export async function getStaticProps() {
  // Get files from blog
  const files = fs.readdirSync("blogs");

  // get slug and front matter
  const posts = files.map((filenames) => {
    // slug
    const slug = filenames.replace(".md", "");
    // Front Matter
    const markdownMeta = fs.readFileSync(`blogs/${filenames}`, "utf-8");
    const { data: frontmatter } = matter(markdownMeta);
    return { slug, frontmatter };
  });
  return {
    props: {
      posts,
    },
  };
}

export default function blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Blog Page tech bros" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {posts.map((post, key) => (
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <Image
                    width={720}
                    height={400}
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={post.frontmatter.image}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      {post.frontmatter.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {post.frontmatter.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {post.frontmatter.description}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link
                        href={`blogpost/${post.slug}`}
                        className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
