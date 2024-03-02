const gulp = require('gulp')

module.exports = function img() {
    return gulp.src('src/img/*.svg')
        .pipe(gulp.dest('build/123img'))
}