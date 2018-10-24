var WebpackAutoInject = require('webpack-auto-inject-version')

module.exports = {
  devServer: {
    proxy: {
      '/.netlify': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/.netlify/functions': '' }
      }
    }
  },
  lintOnSave: 'error',
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    },
    themeColor: '#FFBFCB'
  },
  configureWebpack: {
    plugins: [
      new WebpackAutoInject({
        componentsOptions: {
          AutoIncreaseVersion: {
            runInWatchMode: false // it will increase version with every single build!
          },
          InjectByTag: {
            dateFormat: 'dd/mm/yy'
          }
        }
      })
    ]
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
}
