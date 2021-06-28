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
      {/* <blockquote> */}
      {/*   The Strugle To Do What MAtters To One Self Is Real ! */}
      {/* </blockquote> */}
      <p>
        I'm a Black Millenial Male with a passion for sustainable growth
        🌱.Growth ain't easy and probably the only easy thing is loosing
        focus.Your environment is always trying to pull you into it's world
        view.It is not really growth when you're progressing in something you
        didn't choose.When you're following what society tells you.I like to ask
        myself questions like:
        <ul>
          <li>What really matters to me?</li>
          <li>Am I growing in this thing that I value?</li>
          <li>
            What is the ultimate sacrifice - yes it will take painful
            sacrifices.
          </li>
          <li>HOW MUCH AM I WILLING TO SACRIFICE FOR WHAT I VALUE?</li>
          <li>What shows that I'm growing</li>
          <li>
            Is this route I'm taking towards my goal sustainable or is it gonna
            end up in terrible burnout ?
          </li>
          <li>What's stoping me?</li>
        </ul>
        One thing about growth is that you will never make posive growth in
        something that does not matter to you.No matter the resources you could
        have.Thats why yoy should brutally choose what yoy spend your life
        pursuing
      </p>
      <p>
        This is my public journal.I get to write and you get to read my thoughts
        and worldview.I hope you learn something.I do hope my publications will
        make you ask yourself similar questions.I hope I will encourage you to
        keep dreaming and grinding...Towards What Matters To You
      </p>

      {/* <p> */}
      {/*   Didn't know where to start but I bet starting a blog is a pretty good */}
      {/*   place */}
      {/* </p> */}
    </>
  );
}
