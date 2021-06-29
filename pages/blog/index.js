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
          // TODO  create a way to display blog posts based on date
          //  use datetime widget in netlify cms or generate unitx time (just sth unique)
          // how does nextjs write those full dates and how does that affect my projject
          //  git push 
          // TODO find way to fromat that date
          <BlogListItem key={item.start} {...item} />
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
 console.log(slug);

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
