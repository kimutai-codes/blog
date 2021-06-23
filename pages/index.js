import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
// import fs from "fs";

// export const getStaticProps = async () => {
//   const files = fs.readdirSync("posts");
//   return {
//     props: {
//       slugs: files.map((fileName) => fileName.replace(".md", "")),
//     },
//   };
// };

export default function Home({ slugs }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        <title>Kimutai</title>
      </Head>
      <h1>Hi, I'm Allan Kimutai</h1>
      <p>
        I'm African millenial with a passion to grow out of the mold that the
        world has forced us into.I'm passionate about sustainable growth 🌱 in
        all aspects of my life and the communities that I'm in.
      </p>
      <p>
        This blog is a project to help me realize who I really am,grow and share
        my world view
      </p>

      <p>
        Didn't know where to start but I bet starting a blog is a pretty good
        place
      </p>

      <p>
        My biggest inspiration is{" "}
        <a href="https://twitter.com/jdnoc">Jordan O'Connor</a>..you should
        checkout his website (which heavily inspired mine ){" "}
        <a href="https://jdnoc.com/">jdnoc</a>
      </p>

      {/* {slugs.map((slug) => { */}
      {/*   return ( */}
      {/*     <div key={slug}> */}
      {/*       <Link href={"blog/" + slug}> */}
      {/*         <a>{slug}</a> */}
      {/*       </Link> */}
      {/*     </div> */}
      {/*   ); */}
      {/* })} */}
    </>
  );
}
