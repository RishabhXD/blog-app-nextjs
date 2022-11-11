/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import md from "markdown-it";

export default function slug({ frontmatter, content, slug }) {
  return (
    <>
      <Head>
        <title>My Blogs</title>
        <meta name="description" content="Blog Page for My Use" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="p-10">
        <h1 className="text-2xl p-4">{frontmatter.title}</h1>
        <article
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        ></article>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownMeta = fs.readFileSync(
    path.join("blogs", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
