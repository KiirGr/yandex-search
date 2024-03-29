const gulp = require("gulp");

const server = require("browser-sync").create();
const pug2html = require("./gulp/tasks/pug2html");
const styles = require("./gulp/tasks/styles");
const img = require("./gulp/tasks/img");

const browserSync = (cb) => {
  server.init({
    server: "build",
    notify: false,
    open: true,
    cors: true,
  });

  gulp.watch("src/pages/includes/**/*.scss", gulp.series(styles));
  gulp.watch("src/pages/**/*.pug", gulp.series(pug2html));
  gulp.watch("src/img/*.svg", gulp.series(img));
  gulp.watch("build/*.css").on("change", server.reload);
  gulp.watch("build/*.html").on("change", server.reload);
  gulp.watch("build/img/*.svg").on("change", server.reload);

  return cb();
};

const start = gulp.series(pug2html, styles, img, browserSync);

module.exports = {
  start,
};
