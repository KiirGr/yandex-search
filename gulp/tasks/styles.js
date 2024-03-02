const gulp = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));

module.exports = function styles() {
  return gulp
    .src("src/pages/includes/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("build"));
};
