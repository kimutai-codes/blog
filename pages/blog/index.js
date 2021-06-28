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
        <h1>Blog Archive ✍🏾</h1>
      </div>

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
        date: data.date,
        ...data,
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, title, date }) {
  const formatedDate = format(new Date(date), "do MMM yyyy");

  return (
    <>
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">
            <span>{formatedDate}</span>
            {title}
          </a>
        </Link>
      </div>

      <style jsx>
        {`
          span {
            // background-color: blue;
            padding-right: 15px;
          }
          a {
            text-align: center;
            display: flex;
            flex-wrap: wrap;
            margin: 1em 0;
            padding: 0.3em;
            width: max-content;
            border-left: 5px solid grey;
            border-radius: 5px;
          }
          a span {
            color: #a6accd;
          }
        `}
      </style>
    </>
  );
}

export default Home;
