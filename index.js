'use strict';

const app = require('./server');
const {db} = require('./models/index');
// make sure our tables are created, start up the HTTP server.
db.sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });