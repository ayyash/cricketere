const fs = require('fs/promises');

async function renderToHtml(lang, route, port, config) {
  // fetch it

  let response;
  if (config.urlBased) {

    response = await fetch(`http://localhost:${port}/${lang}/${route}`);
  } else {

    const meta = {
      [config.langCookieName]: lang
    };
    const headers = new Headers(meta);
    response = await fetch(`http://localhost:${port}/${route}`, {headers});
  }

  if (response.ok) {
    const text = await response.text();
    // the output folder is ./client/static/{route}, relative to root server file
    const d = `${config.prerenderOut}${lang}/${route}`;
    // mkdir recursive, creates the folder structure
    await fs.mkdir(d, { recursive: true });
    // creates index.html, and writes text to it.
    await fs.writeFile(d + '/index.html', text);
    // checking the success
    console.log('ok', route, text.length);
  } else {
    // log errores
    console.log('not ok', route, response.status);
  }

}


// let's pass the port along
module.exports = async (port, config) => {

  // generate /client/static/route/index.html
  // my static routes
  const routes = [
    'content/details',
    '',
    'projects',
    'projects/1'
  ];
  // remove static folder first
  await fs.rm(config.prerenderOut, { recursive: true, force: true });

  // for await (const a of routes.map(route => renderToHtml(route, port, config.prerenderOut))) {
  // }

  // for every language\
  for(const lang of config.languages) {

    for (const route of routes) {
      await renderToHtml(lang, route, port, config);
    }
  }

}
