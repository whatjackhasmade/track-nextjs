const withPWA = require(`next-pwa`);
const path = require(`path`);
const runtimeCaching = require(`next-pwa/cache`);

const buildPath = stringDirectory => path.resolve(__dirname + `/` + stringDirectory);

module.exports = withPWA({
  images: {
    domains: [`localhost`],
  },
  pwa: {
    dest: `public`,
    runtimeCaching,
  },
  trailingSlash: true,
  webpack: config => {
    config.resolve.alias[`track`] = buildPath(`src/components`);
    config.resolve.alias[`atoms`] = buildPath(`src/components/atoms`);
    config.resolve.alias[`particles`] = buildPath(`src/components/particles`);

    // Support SVG loading https://stackoverflow.com/a/55180310
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: [`@svgr/webpack`],
    });

    return config;
  },
});
