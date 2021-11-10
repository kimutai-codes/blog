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
					<Post post={post} />
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
				`}
			</style>
		</div>
	);
};

export const getStaticProps = async () => {
	const postFiles = fs.readdirSync('posts');

	const posts = postFiles.map((fileName) => {
		//get slugs
		const slug = fileName.replace('.md', '');
		//get frontmatter
		const postPaths = path.join('posts', slug + '.md');
		const fileContents = fs.readFileSync(postPaths, 'utf8');
		const { data: frontMatter } = matter(fileContents);
		const rawDate = frontMatter.date;
		const parsedDate = format(new Date(rawDate), 'do MMM yyyy');

		return {
			slug,
			frontMatter,
			parsedDate,
		};
	});

	return {
		props: {
			posts: posts.sort(sortByDate),
		},
	};
};

export default Home;
