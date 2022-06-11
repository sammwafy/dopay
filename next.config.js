/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.node = {
        fs: 'empty'
      }
    }

    return config;
  }
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
