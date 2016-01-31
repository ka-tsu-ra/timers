ommands/set up
`npm init`
`npm i webpack -S`
gitignore node_modules
make web pack.config.js file. Require webpack and path. Specify config object - entry and output is minimal info webpack needs to know how to bundle files up.
make src/client/app tree
make index.jsx file in app directory. 
`./node_modules/.bin/webpack -d` That runs webpack in dev mode, generates bundle.js and bundle.s.map file in src/client/public dir
gititnore src/client/public?
make index.html in src/client. Include script public/bundle.js with type “text/javascript”. Make a div with id=“app” for the component(s) to go into later.
Set up babel loader to translate ES6 into ES5 for browsers, and translate JSX:
`npm install babel-loader babel-preset-es2015 babel-preset-react -S`
babsl-preset-es2015 and babel-preset-react are plugins used by babel-loader to translate ES5 and JSX syntax respectively.
create .babelrc file specifying “presets”
Tell webpack to use babel-loader when bundling files:
Add module and loaders stuff to config in webpack.config.js.
`npm install react react-dom -S`
Update index.jsx to actually use react. Import React from ‘react’ and {render} from ‘react-don’. Set up the file with class extending React.Component etc and render function etc.
`./node_modules/.bin/webpack -d` updates bundle file.
`./node_modules/.bin/webpack -d —watch` puts it in watch mode so updates get rebundled automatically.
Add scripts to package.json to shorten those commands.
Create components.....
