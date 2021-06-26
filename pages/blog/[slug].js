import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import { format, parse, parseISO } from "date-fns";
import moment from "moment";

export const getStaticPaths = async () => {
  //get paths
  //this will return an array
  const files = fs.readdirSync("posts");

  const paths = files.map((fileName) => ({
    params: {
      // get id of the file to be used in path
      slug: fileName.replace(".md", ""),
    },
  }));

  //an array that contains a params obj that in turn contains id obj
  // params: {
  //   slug: "slug.md",
  // },
  return {
    paths,
    fallback: false,
  };
};

//function to fetch the actual contenet of the post
//takes an argument of the parameter we need to fetch data for
export const getStaticProps = async ({ params: { slug } }) => {
  //read the contents of the file
  //"make the file" using path.join with the slug from above then add the file extention
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content);
  console.log(parsedMarkdown.data);
  const date = parsedMarkdown.data.date;
  const rawDate = date;
  // const parsedDate = parse("25/06/2012", "dd/MMM/yyyy", new Date());
  const parsedDate = moment("06/25/2012").format("Mo MMM YYYY");
  console.log(parsedDate);

  //return an object with props inside of it
  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

//this is the template that also makes dinamic routes
const Post = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>

      <h1>{data.title}</h1>

      <p>{data.description}</p>

      <span>{data.date}</span>

      <div
        dangerouslySetInnerHTML={{ __html: htmlString }}
        className="blogContent"
      />

      <style jsx>{`
        .blogContent {
          // word-wrap: break-word;
        }
      `}</style>
    </>
  );
};

export default Post;
