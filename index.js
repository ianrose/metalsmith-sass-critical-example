var Metalsmith = require('metalsmith')
var markdown = require('metalsmith-markdown')
var layouts = require('metalsmith-layouts')
var sass = require('metalsmith-sass')
var filedata = require('metalsmith-filedata')

Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .use(sass({
    outputDir: 'styles'
  }))
  .use(filedata({
    pattern: ['styles/*.css'],
    key: 'cssData'
  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    directory: 'layouts',
    default: 'default.hbs',
    pattern: '**/*.html' 
  }))
  .build(function (err) {
    if (err) throw err
  })