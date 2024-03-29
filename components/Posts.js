import Link from 'next/link';
import { format } from 'date-fns';

const Post = ({ post }) => {
	const rawDate = post.frontMatter.date;
	const parsedDate = format(new Date(rawDate), 'do MMM yyyy');
	return (
		<a href={`/blog/${post.slug}`} className='card'>
			<p>{post.frontMatter.title}</p>
			<span className='date'>Posted on: {parsedDate}</span>

			<style jsx>
				{`
					img {
						border-radius: 3%;
					}
					.card {
						padding: 0 15px;
						border-radius: 10px;
						box-shadow: 1px 1px 8px 0 black;
            flex: 1 1 40%;
					}
					.date {
						color: #96a0c1;
					}
          p{
            font-size: large;
            font-weight: bold;
          }
				`}
			</style>
		</a>
	);
};

export default Post;
