const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production' ? '/' : '/'
};