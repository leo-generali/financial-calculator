var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src('sass/styles.scss')
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write('./css/maps'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('default',function() {
  gulp.watch('sass/**/*.scss',['styles']);
});