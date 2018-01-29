import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import prefix from 'autoprefixer';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import config from './config';

const src = config.paths.sources
const dest = config.paths.destinations

// Compile scss source into css
const buildStyle = () =>
  gulp
    .src(['src/style/*.scss', 'src/style/product/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: function(err) {
      notify.onError({
        title: 'ERROR'
      })(err)
    }}))
    .pipe(sass())
    .pipe(postcss([prefix()]))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(dest.css));

// Watch style sources
const watchStyle = () =>
  gulp.watch(
    config.paths.sources.styles.all,
    gulp.series(buildStyle)
  );

export {
  buildStyle,
  watchStyle
}