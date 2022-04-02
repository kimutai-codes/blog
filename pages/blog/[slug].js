import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import marked from 'marked';
import { format } from 'date-fns';
import Image from 'next/image';
import moment from 'moment';

export const getStaticPaths = async () => {
	//get paths
	//this will return an array
	const files = fs.readdirSync('posts');

	const paths = files.map((fileName) => ({
		params: {
			// get id of the file to be used in path
			slug: fileName.replace('.md', ''),
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
		.readFileSync(path.join('posts', slug + '.md'))
		.toString();

	const parsedMarkdown = matter(markdownWithMetadata);
	const htmlString = marked(parsedMarkdown.content);
	const rawDate = parsedMarkdown.data.date.toString();
	//date_fns working too
	const parsedDate = format(new Date(rawDate), 'do MMM yyyy');
	// meoment JS working
	// const parsedDate = moment(rawDate).format("Do MMM YYYY");

	//return an object with props inside of it
	return {
		props: {
			htmlString,
			data: parsedMarkdown.data,
			parsedDate,
		},
	};
};

//this is the template that also makes dinamic routes
const Post = ({ htmlString, data, parsedDate }) => {
	// console.log(data);
	return (
		<>
			<Head>
				<title>{data.title}</title>
				<meta name='description' content={data.description} />
			</Head>
			<span className='blogHeader'>
				<h1>{data.title}</h1>
				<span className='desc'>{data.description}</span>
				<span className='date'>Updated: {parsedDate}</span>
				{/* <img src={`/${data.thumbnail}`} alt='' /> */}
			</span>
			<Image
				src={`/${data.thumbnail.src}`}
				width={1080}
				height={610}
				alt=''
				layout='responsive'
				priority='true'
			/>
			<div
				dangerouslySetInnerHTML={{ __html: htmlString }}
				className='blogContent'
			/>
			<style jsx>{`
        .blogHeader .desc{
          text-align: center;
          display: block;
          text-anchor: middle;
          margin-bottom: .5em;
        }
        .blogHeader .date {
          text-align: center;
          display: block;
          font-style: italic;
          margin-bottom: 25px;
        }
        .blogContent{
          margin-top: 3rem;
        }
        }
      `}</style>
		</>
	);
};

export default Post;
