import Head from "next/head";
import Link from "next/link";
// import fs from "fs";
import { getAllPosts } from "../../lib/data";

export const getStaticProps = async () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug,
      })),
    },
  };
};

const Blog = ({ posts, title, slug, content, data }) => {
  return (
    <>
      <Head>
        <title>Blog Repository | Allan Kimutai</title>
      </Head>
      <h1>Welcome to the blog</h1>
      {posts.map((item) => {
        <div key={item.slug}>
          <Link href={`/blog/ ${item.slug}`}>
            <a>{item.slug}</a>
          </Link>
        </div>;
        console.log(item.slug);
      })}
    </>
  );
};
export default Blog;

// function BlogListItem({ slug, title, date, content }) {
//   return (
//     <div>
//       <div>
//         <Link href={`/blog/${slug}`}>
//           <a className="font-bold">{title}</a>
//         </Link>
//       </div>
//       <div>{content.substr(0, 300)}</div>
//     </div>
//   );
// }
