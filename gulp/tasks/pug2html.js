const gulp = require('gulp');
const pug = require('gulp-pug');

module.exports = function pug2html() {
  return gulp
    .src('src/pages/includes/*.pug')
    .pipe(
      pug({
        basedir: './src',
      }),
    )

    .pipe(gulp.dest('build'));
};
