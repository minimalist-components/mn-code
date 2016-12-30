import gulp from 'gulp'
import bowerFiles from 'bower-files'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import path from 'path'

gulp.task('vendorJS', vendorJSTask)

function vendorJSTask() {
  let dependencies = bowerFiles()
    .ext('js')
    .files

  const highlightPath = path.resolve(__dirname, '..', 'docs/highlight.js')
  dependencies = dependencies.concat(highlightPath)

  return gulp
    .src(dependencies)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./docs'))
}
