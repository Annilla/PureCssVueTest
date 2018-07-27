// vue.config.js
module.exports = {
  // options...
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/dist5000/'
    : '/'
}