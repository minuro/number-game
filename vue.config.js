module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/number-game/'
      : '/',
    outputDir: 'docs',
  }