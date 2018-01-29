import { getEnv } from './util'

const pkg = require('pjson')
const envVar = getEnv()
const env = envVar.dist ? 'dist/' : 'public/'

module.exports = {
  pkg: {
    name: pkg.name,
  },
  pluginOpts: {
    browserSync: {
      port: 1985,
      server: {
        baseDir: env,
      },
    }
  },
  paths: {
    base: env,
    sources: {
      docs: 'src/markup/*.pug',
      markup: 'src/markup/**/*.pug',
      overwatch: 'public/**/*{html,js,css}',
      scripts: {
        root: 'src/script/index.js',
        all: 'src/script/**/*.js',
      },
      styles: {
        base: 'src/style',
        root: 'src/style/style.scss',
        all: 'src/style/**/*.scss',
      }
    },
    destinations: {
      css: env + 'css/',
      html: env,
      js: env + 'js/',
    },
  },
}
