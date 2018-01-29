const del = require('del');

const cleanPublic = (done) =>
  del([
    'public',
    '!public/index.html'
  ], done);

export { cleanPublic };