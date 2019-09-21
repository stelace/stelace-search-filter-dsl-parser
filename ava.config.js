export default () => ({
  files: [
    'test/**/*.spec.js'
  ],
  sources: [
    '**/*.js',
    '!node_modules/**/*'
  ],
  serial: false,
  cache: false
})
