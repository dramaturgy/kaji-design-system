import gulp from 'gulp';
import nunjucksRender from 'gulp-nunjucks-render';

const buildMarkup = () => {
  return gulp.src('src/template/_page/**/*.+(html)')
    .pipe(nunjucksRender({
      path: ['src/template'],
      envOptions: {
        trimBlocks: true,
        lstripBlocks: true
      }
    }))
    .pipe(gulp.dest('public'));
}

// Watch markup sources
const watchMarkup = () =>
  gulp.watch(
    'src/template/**/*.+(html)',
    gulp.series(buildMarkup)
  );

export {
  buildMarkup,
  watchMarkup
}