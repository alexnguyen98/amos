const path = require('path')

const pathToInlineSvg = path.resolve(__dirname, '../src/icons')

module.exports = async ({ config, mode }) => {

const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
fileLoaderRule.exclude = pathToInlineSvg;

config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          query: {
            modules: true,
            importLoaders: 1,
          },
        },
        {
          loader: 'sass-loader',
        }
      ],
      exclude: /calendar\.scss$/
    },
    {
      test: /calendar\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          query: {
            importLoaders: 1,
          },
        },
        {
          loader: 'sass-loader',
        }
      ],
    },
    {
      test: /\.svg$/,
      include: pathToInlineSvg,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      }],
    }
  )
  return config
};