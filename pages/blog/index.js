import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';

const Home = ({ posts }) => {
	console.log(posts);
	return (
		<div>
			<Head>
				<title>Blog Repository | Allan Kimutai</title>
			</Head>
			<div>Blog Archive ✍🏾</div>

			{posts.map((post, index) => (
				<div>
					<Link href={`/blog/${post.slug}`}>
						<a className='font-bold'>
							<span>{post.frontMatter.date}</span>
							{post.frontMatter.title}
						</a>
					</Link>
				</div>
			))}
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
		return {
			slug,
			frontMatter,
		};
	});

	return {
		props: {
			posts,
		},
	};
};

export default Home;
