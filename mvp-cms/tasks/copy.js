import gulp from 'gulp';

const copyAll = () =>
  gulp.src(['src/copy/**/*'])
    .pipe(gulp.dest('public/copy'));

export { copyAll }