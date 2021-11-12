export const sortByDate = (a, b) => {
	return (
		new Date(b.frontMatter.publishedDate) -
		new Date(a.frontMatter.publishedDate)
	);
};
