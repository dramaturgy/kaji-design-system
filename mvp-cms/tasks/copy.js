import gulp from 'gulp';

const copyAll = () =>
  gulp.src(['src/copy/**/*'])
    .pipe(gulp.dest('public/copy'));

// Watch copies sources
const watchCopy = () =>
  gulp.watch(
    'src/copy/**/*',
    gulp.series(copyAll)
  );

export {
  watchCopy,
  copyAll
}