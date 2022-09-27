// simple script to run while firebase emulators are running
const config = require('../server/config');
const prerender = require('./fetch');

async function act(port) {
  await prerender(port, config);
  console.log('Done prerendering');
}

act(1212);
