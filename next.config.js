const path = require("path");

/**
 * @type {import("next").NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["localhost"],
    deviceSizes: [640, 768, 1080, 1440],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  staticPageGenerationTimeout: 300,
};
