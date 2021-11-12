import Link from 'next/link';
import { format } from 'date-fns';

const Post = ({ post }) => {
	const rawDate = post.frontMatter.date;
	const parsedDate = format(new Date(rawDate), 'do MMM yyyy');
	return (
		<div className='card'>
			{/* <img src={post.frontMatter.thumbnail} alt='' /> */}
			<h4>
				<Link href={`/blog/${post.slug}`}>
					<a>{post.frontMatter.title}</a>
				</Link>
			</h4>
			<div>Posted on: {parsedDate}</div>
			<style jsx>
				{`
					img {
						border-radius: 3%;
					}
					.card {
						padding: 0 15px;
						border-radius: 10px;
						box-shadow: 1px 3px 8px 0 black;
					}
				`}
			</style>
		</div>
	);
};

export default Post;
