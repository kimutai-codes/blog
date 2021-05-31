import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import fs from "fs";

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((fileName) => fileName.replace(".md", "")),
    },
  };
};

export default function Home({ slugs }) {
  return (
    <>
      <Head>
        <title>Kimutai</title>
      </Head>
      <h1>Hi, I'm Allan Kimutai</h1>

      {slugs.map((slug) => {
        return (
          <div key={slug}>
            <Link href={"blog/" + slug}>
              <a>{slug}</a>
            </Link>
          </div>
        );
      })}
    </>
  );
}
