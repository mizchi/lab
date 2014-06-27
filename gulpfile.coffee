gulp       = require 'gulp'
browserify = require 'gulp-browserify'
rename     = require 'gulp-rename'
watch      = require 'gulp-watch'
plumber    = require 'gulp-plumber'
connect    = require 'connect'
concat     = require 'gulp-concat'
sass       = require 'gulp-sass'
bowerFiles = require "gulp-bower-files"

gulp.task 'coffee', ->
  gulp
    .src 'src/lab.coffee', read: false
    .pipe plumber()
    .pipe browserify
      transform: ['coffeeify']
      extensions: ['.coffee']
      debug: true
    .pipe rename 'lab.js'
    .pipe gulp.dest './build'

gulp.task 'server', (next) ->
  connect()
    .use connect.static './build'
    .listen 3456, next

gulp.task 'dev', ['build'], ->
  gulp.watch('src/**/*.coffee', ['coffee'])
  gulp.watch('src/**/*.jade', ['js'])
  gulp.watch('src/styles/*.scss', ['css'])

gulp.task 'build', ['vendor', 'concat-css','coffee', 'css', 'cmlibs']
gulp.task 'default', ['build']

gulp.task 'concat-css', ->
  gulp.src [
    './bower_components/codemirror/lib/codemirror.css'
    ]
  .pipe concat('vendor.css')
  .pipe gulp.dest('./build/')

gulp.task 'css', ->
  gulp
    .src './src/styles/*.scss'
    .pipe plumber()
    .pipe sass()
    .pipe rename 'lab.css'
    .pipe gulp.dest './build'

gulp.task 'vendor', ->
  bowerFiles()
    .pipe plumber()
    .pipe concat('vendor.js')
    .pipe gulp.dest('./build')

gulp.task 'cmlibs', ->
  gulp.src [
    './bower_components/codemirror/lib/codemirror.js'
    './bower_components/codemirror/keymap/vim.js'
    './bower_components/codemirror/addon/edit/continuelist.js'
    './bower_components/codemirror/mode/markdown/markdown.js'
    './bower_components/codemirror/mode/coffeescript/coffeescript.js'
    # './bower_components/codemirror/mode/jade/jade.js'
    './bower_components/codemirror/mode/xml/xml.js'
    ]
  .pipe concat('cmlibs.js')
  .pipe gulp.dest('./build/')
