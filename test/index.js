const test = require('ava');
const path = require('path');
require(path.join(process.cwd(), 'production.js'));

test('first test', t => {
  // eslint-disable-next-line no-unused-vars
  const indexModel = think.model('index');
})
