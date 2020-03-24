const path = require('path')

module.exports = async ({ config }) => {
  config.resolve.alias['~storybook'] = path.resolve(__dirname)

  config.module.rules.push({
    resourceQuery: /blockType=story/,
    loader: 'vue-storybook',
  })

  config.module.rules.push({
    test: /\.s(a|c)ss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  })

  config.module.rules.push({
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('cache-loader') */
          {
            loader: './node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: './node_modules/.cache/ts-loader',
              cacheIdentifier: 'd3eda512'
            }
          },
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: './node_modules/babel-loader/lib/index.js'
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: './node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: false
            }
          }
        ]
      },)

  return config
}
