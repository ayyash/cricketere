# Cricketere

Angular Cricketere

## Get started

Download nodejs (10+) and npm (6.5+), download this project (it's a boilerplate, it is designed to be decoupled from original), and in the root, run 

`npm install -g @angular/cli typescript gulp`

> Keep an eye on https://github.com/gulp-community/gulp-less/issues/312, if not yet resolved, update node_modules/gulp-less/index file with the content of the pull request https://github.com/gulp-community/gulp-less/pull/313

You need gulp to run the gulp tasks to prepare css out of LESS and RTL files, in addition to post build for ssr. Always check what typescript is supported by angular and install a local version of it.

Run

`npm run install` and `npm run install:dev`: will get you started with packages needed for this seed

Then (these gulp tasks are part of [@sekrab/gulpbin](https://www.npmjs.com/package/@sekrab/gulpbin) package)

`gulp inject` to inject all components and services in barrel files

Finally

`gulp critical` to generate the css files from .less files

## Renaming

To rename every instance of "cricketere" to a new name, find and replace the following
- "cricketere" -> "newname"
- "Cricketere" -> "Newname"
- "cr" -> "nn" (angular selector prefix)
- rename assets/js/cricketere.js to `newname.js`

## Cricketere flavors

The main branch contains everything, different combinations are added in different branches. 


<input type="checkbox"> Add explanation of each flavor here. [TODO:]

<!-- |             | SSR         | URL BASED | RTL
| ----------- | ----------- | --------- |-------
| ssr-url     | ✅         | ✅        |
| ssr         | ✅         |           |
| client-url  |             | ✅       |
| client      |             |            |
| ssr-url-rtl | ✅         | ✅        | ✅
| ssr-rtl     | ✅         |           | ✅
| client-url-rtl  |             | ✅       | ✅
| client-rtl      |             |            | ✅

1. ssr
2. ssr-rtl
3. client-only
4. client-only-rtl

// being url based does not need a lot of work -->

## NPM commands

The following commands in npm to help you get going:

- `npm start`: starts with normal english angular development (then browse to localhost:5100)
    serves index.dev.html with localdata/config.json
- `npm run start:prod`: starts development server with production configuration and environment
    serves index.dev.prod.html with localdata/config.prod.json

<!-- - `npm run network`: starts with 192.168.0.100:5200 as host to test localhost on mobile devices (change host in package.json)
- `npm run network:secure`: starts with normal english angular development, under https (then browse to https://192.168.0.100:5200) This option might need a local certificate to be created. This option needs https for iis to run mockup api. This option never works on Safari. -->

- `npm run build` generates a client-side angular app in /host/client + /host/index/index.lang.html to be served
> this rewrites the baseHref to / or /lang/ depending on gulp configuration: isUrlBased, 
> if true, the project will appear under hosturl/en or hosturl/ar ... etc

> This also injects the right rtl css in header for rtl supported languages.

- `npm run build:ssr`:  builds the client-side and server-side full version under /host/client, also copies resources to host/server/locale and make them ready to be used in SSR. 

Notes:

- Do not rename `placeholder.html` to `index.html`, there is a limitation in ngExpressEngine that it favores the index.html in output folder, over the one provided to `render()` function.
- There are four route files in `host/server` folder, each with a different routing configuration to suit the project needs: 
    - routes (client side only)
    - routes-url (client side only, language switch via url)
    - routes-ssr (server side)
    - routes-ssr-url (server side, language switch via url)
- Known limitation with resources. I still depend on global `resources.keys` directly, to read resources on both client and server, depending on language cookie. This needs to be fixed so that the resources are fully loaded on server before use.
- Build ssr task also takes care of generating RTL css links for all languages that support RTL. Setup languages supported in `gulpfile/config.json`, under `languages` collection.

## Angular universal

This seed assumes a second project living in: `host`, where enough nodejs server code is created to run the server later. The npm task `build:ssr` creates : `/client`, and the creates server side files `server/main.js`, in addition to locales and index files. So the final tree of the host folder looks like this

```
|-client (angular output sits here)
|-server
|--------locale
|----other server files
|----main.js
|-index
|----index.en.html
|-server.js
```

## Gulp commands for Angular

> Gulp tasks has been moved to its own package under [@sekrab/gulpbin](https://www.npmjs.com/package/@sekrab/gulpbin)

You can optionally use these instead of the angular cli packaged commands (or you can create files manually). Read on here:
[GulpBin Readme](https://github.com/ayyash/gulpbin)


TODO:

- [✅] Add reuse strategy
- [⬜]] Add default components examples
- [✅] Make a lazy loaded module
- [⬜] Seperate Sever-only service
- [⬜] Add PWA
- [✅] Get rid of clonedeep in state
