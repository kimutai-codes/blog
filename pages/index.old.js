import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
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
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link
					rel='mask-icon'
					href='/safari-pinned-tab.svg'
					color='#5bbad5'
				/>

				<title>Kimutai</title>
			</Head>
			<h1>Hello, I'm Kimutai</h1>

			{/* <p className='quote'>On a quest to Suffer Less !</p> */}

			<p>
				Welcome to my blog.I'm Allan Kimutai, Kenyan and soon turning
				21.
			</p>

			<p>
				I'm a self taught programmer and a Software Dev Student in a
				local Uni
			</p>

			<p>
				I'm passionate about growth through gradual self improvement.The
				goal is to suffer less stupidly each day..However that's easier
				said than done
			</p>

			<p>
				I'm so broke and it hurts, but there are more pressing issues
				than being broke in your early twenties.Those issues eat us
				alive and actually most people are walking dead.Luckily, most of
				them can be overcome through deliberate self improvement -
				putting in the work
			</p>

			<p>
				Improving yourself will also solve basic money problems...so
				being broke now is not such a big deal.It would be nice to have
				a little money tho 😂😂
			</p>

			<p>
				I'm basically broke coz I'm lazy.Why lie😂😂..so you see,
				working on this will solve my little problem😉
			</p>

			<p>
				I'm trying to figure shit out really...Asking a lot of stupid
				questions and sharing my notes here.Bookmark this blog if
				reading notes to the questions I ask interests you
			</p>
			<style jsx>
				{`
					.quote {
						font-style: italic;
						padding: 3px;
						border-left: 5px solid grey;
						border-radius: 5px;
					}
				`}
			</style>
		</>
	);
}
