require("dotenv").config();
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const withPWA = require("next-pwa");

module.exports = withPWA({
  // other next config
  pwa: {
    dest: "public",
  },

  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    TTTEEEEEEEEESSSSSSSSSSSTTTTTTTTT_ENV:
      process.env.TTTEEEEEEEEESSSSSSSSSSSTTTTTTTTT_ENV,
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
    PRIVATE_KEY_A: process.env.PRIVATE_KEY_A,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
});
