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
    const subRoute = route.substring(0, route.lastIndexOf('/'));
    const leafRoute = route.substring(route.lastIndexOf('/')+1);
    const d = `${config.prerenderOut}${lang}/${subRoute}/`;
    // mkdir recursive, creates the folder structure
    if (subRoute !== ''){
      await fs.mkdir(d, { recursive: true });
    }


    // if exists first remove
    const _file = d + `${leafRoute || 'index'}.html`;
    // too slow, not working
    // fs.rm(_file, { force: true, recursive: true });


    const text = await response.text();

    // write the file
    await fs.writeFile(_file, text + '<!-- prerendered -->');

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
  // await fs.rm(config.prerenderOut, { recursive: true, force: true });

  // for await (const a of routes.map(route => renderToHtml(route, port, config.prerenderOut))) {
  // }

  // for every language\
  for(const lang of config.languages) {
    await fs.rm(config.prerenderOut + lang, {recursive: true, force: true});

    for (const route of routes) {
      await renderToHtml(lang, route, port, config);
    }
  }

}
