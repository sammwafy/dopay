/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		images: {
			layoutRaw: true,
		},
	},
};

module.exports = nextConfig;

const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
	// optional: you can modify antd less variables directly here
	// modifyVars: { '@primary-color': '#04f' },
	// Or better still you can specify a path to a file
	lessVarsFilePath: "./styles/variables.less",
	// optional
	lessVarsFilePathAppendToEndOfContent: false,
	// optional https://github.com/webpack-contrib/css-loader#object
	cssLoaderOptions: {},

	// Other Config Here...
});
