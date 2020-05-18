const postcssPresetEnv = require('postcss-preset-env')
module.exports = {
  plugins: [
    postcssPresetEnv({
      autoprefixer: {
        grid: true,
      },
      browsers: ['last 1 version', '> 1%', 'not dead'],
      stage: 1,
      features: {
        'media-query-ranges': true,
        'nesting-rules': true,
        'custom-media-queries': true,
      },
    }),
  ],
}
