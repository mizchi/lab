gulp       = require 'gulp'
browserify = require 'browserify'
rename     = require 'gulp-rename'
watch      = require 'gulp-watch'
plumber    = require 'gulp-plumber'
connect    = require 'connect'
concat     = require 'gulp-concat'
sass       = require 'gulp-sass'
bowerFiles = require "gulp-bower-files"
source     = require 'vinyl-source-stream'

gulp.task 'js', ->
  browserify
    entries: ['./app/lab.coffee']
    extensions: ['.coffee','.jade', '.js']
  .transform 'coffeeify'
  .transform 'jadeify'
  .bundle()
  .pipe plumber()
  .pipe source 'app.js'
  .pipe gulp.dest 'public'

gulp.task 'server', (next) ->
  connect()
    .use connect.static './public'
    .listen 3456, next

gulp.task 'dev', ['build'], ->
  gulp.watch('app/**/*.coffee', ['js'])
  gulp.watch('app/**/*.jade', ['js'])
  gulp.watch('app/styles/*.scss', ['css'])

gulp.task 'build', ['vendor', 'concat-css','js', 'css', 'cmlibs']
gulp.task 'default', ['build']

gulp.task 'concat-css', ->
  gulp.src [
    './bower_components/codemirror/lib/codemirror.css'
    ]
  .pipe concat('vendor.css')
  .pipe gulp.dest('./public')

gulp.task 'css', ->
  gulp
    .src './app/styles/*.scss'
    .pipe plumber()
    .pipe sass()
    .pipe rename 'lab.css'
    .pipe gulp.dest './public'

gulp.task 'vendor', ->
  bowerFiles()
    .pipe plumber()
    .pipe concat('vendor.js')
    .pipe gulp.dest('./public')

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
  .pipe gulp.dest('./public')
