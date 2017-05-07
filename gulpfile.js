const gulp = require("gulp");
const scss = require('gulp-ruby-sass');

gulp.task('scss', () =>
  scss('scss/custom.scss')
    .on('error', scss.logError)
    .pipe(gulp.dest('css'))
);

gulp.task('watch', () => 
  gulp.watch('scss/custom.scss', ['scss'])
);