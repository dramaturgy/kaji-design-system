import gulp from 'gulp';
import browsersync from 'browser-sync';
import vfs from 'vinyl-fs';
import config from './config';
import { buildStyle } from './style';
import { buildMarkup } from './markup';

// Init browsersync
const serverInit = () => {
  const server = browsersync.create();
  server.init({
    port: 1985,
    open: false,
    ghostMode: {
      clicks: false,
      forms: true,
      scroll: true
    },
    server: {
      baseDir: config.paths.base
    }
  });

  // see https://community.risingstack.com/the-definitive-guide-to-object-streams-in-node-js/
  // replace doing readSync -> vf -> vs with vfs
  return server.watch(config.paths.sources.overwatch, (evt, file) => {
    if (evt === 'change' && file.indexOf('.css') === -1) {
      server.reload();
    }
    if (evt === 'change' && file.indexOf('.css') !== -1) {
      vfs
        .src(file)
        .pipe(server.stream());
    }
  });
}

const serve = gulp.series(
  gulp.parallel(
    buildMarkup,
    buildStyle
  ),
  serverInit
);

export { serve }