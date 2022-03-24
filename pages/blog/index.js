import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import { format } from 'date-fns';
import { sortByDate } from '../../utils';
import Post from '../../components/Posts';

const Home = ({ posts }) => {
	return (
		<div>
			<Head>
				<title>Blog Repository | Allan Kimutai</title>
			</Head>
			<h1>Blog Archive ✍🏾</h1>

			<div className='posts'>
				{posts.map((post, index) => (
					<Post key={index} post={post} />
				))}
			</div>

			<style jsx>
				{`
					span {
						padding-left: 15px;
					}
					a {
						text-align: center;
						display: flex;
						flex-wrap: wrap;
						margin: 1em 0;
						padding: 0.3em;
						width: max-content;
						border-left: 5px solid #82aaff;
						border-radius: 5px;
						color: #96a0c1;
					}

					a:hover {
						color: #82aaff;
					}
					img {
						height: 20px;
						width: 20px;
						border-radius: 5px;
					}
					.posts {
						display: flex;
						flex-wrap: wrap;
						gap: 1em;
					}
				`}
			</style>
		</div>
	);
};

export const getStaticProps = async () => {
	//read post files from its folder
	const postFiles = fs.readdirSync('posts');
	//map over the postfiled to get details like slugs and stuff
	//TOLEARN
	const posts = postFiles.map((fileName) => {
		//get slugs
		const slug = fileName.replace('.md', '');
		//get the exact path of each post
		const postPaths = path.join('posts', slug + '.md');
		//get the file contents using the fs module
		const fileContents = fs.readFileSync(postPaths, 'utf8');
		//deconstruct the data you fetch using the fs module and parse with matter to get frontmatter
		//TOLEARN
		const { data: frontMatter } = matter(fileContents);
		// get date from the extracted frontmatter
		const rawDate = frontMatter.date;
		//parse the date with datefns format function
		const parsedDate = format(new Date(rawDate), 'do MMM yyyy');
		//return data about each file
		return {
			slug,
			frontMatter,
			parsedDate,
		};
	});
	//the resturn of the variale above is what we are going to return as the props.This props is going to be the return of the getStaticProps function
	return {
		props: {
			posts: posts.sort(sortByDate),
		},
	};
};

export default Home;
