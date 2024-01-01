const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fcvlfutsal_seniors_2024/dist/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
})
