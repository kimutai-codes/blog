import Link from 'next/link';
const Post = ({ post }) => {
	return (
		<div>
			<img src={post.frontMatter.thumbnail} alt='' />
			<div>Posted on: {post.frontMatter.date}</div>
			<style jsx>
				{`
					img {
						border-radius: 3%;
						height: 300px;
						width: 200px;
					}
				`}
			</style>
		</div>
	);
};

export default Post;
