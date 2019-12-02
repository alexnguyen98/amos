const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  minify = require('gulp-clean-css'),
  merge = require('merge-stream')

gulp.task('style', () => {
  
  const globalStream = gulp.src('../src/styles/global.scss')
    .pipe(sass().on('error', console.error.bind(console)))
  
  const calendarStream = gulp.src('../src/styles/calendar.scss')
    .pipe(sass().on('error', console.error.bind(console)))

  const cssStream = gulp.src('../dist/style.css')

  const mergeStreams = merge(globalStream, cssStream, calendarStream)
    .pipe(concat('style.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('../dist'))

  return mergeStreams
})