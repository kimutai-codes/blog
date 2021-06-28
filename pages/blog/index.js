import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../../lib/data";
import { format } from "date-fns";

function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {posts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        description: data.description,
        date: format(new Date(data.date), "do MMM yyyy"),
        ...data,
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, title, date }) {
  return (
    <>
      <div>
        <span>{date}</span>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{title}</a>
        </Link>
      </div>
      <style jsx>
        {`
          span {
            // background-color: blue;
            padding-right: 15px;
          }
          div {
            text-align: center;
            display: flex;
            flex-wrap: wrap;
          }
        `}
      </style>
    </>
  );
}

export default Home;
