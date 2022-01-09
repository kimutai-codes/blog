// next.config.js
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
});
module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});

module.exports = {
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'my-build-id'
  },
}