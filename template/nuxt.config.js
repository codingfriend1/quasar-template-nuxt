const theme = 'mat' // Quasar themes: "mat", "ios"

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'quasar-nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width' },
      { name: 'format-detection', content: 'telephone="no"' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { hid: 'description', name: 'description', content: 'Quasar + Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/quasar-logo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: [
    '~/plugins/quasar.js'
  ],
  css: [
    `~/assets/themes/app.${theme}.styl`
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/quasar.js'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      config.resolve.alias.quasar = `quasar-framework/dist/quasar.${theme}.esm`

      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
