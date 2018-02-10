import gulp from 'gulp';
import { cleanPublic } from './tasks/clean';
import { watchCopy, copyAll } from './tasks/copy';
import { serve } from './tasks/serve';
import { watchMarkup, buildMarkup } from './tasks/markup';
import { watchStyle, buildStyle } from './tasks/style';

export {
  copyAll,
  buildStyle,
  buildMarkup,
  cleanPublic
}

const clean = gulp.series( cleanPublic );
const copy = gulp.series( copyAll );
const watch = gulp.parallel( watchMarkup, watchStyle, watchCopy );

const defaultTask = gulp.series( clean, copy, gulp.parallel( serve, watch ) );

export default defaultTask;