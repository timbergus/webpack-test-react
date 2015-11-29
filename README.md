# [WebPack](https://webpack.github.io/) Test

This is a test to see how WebPack works using React.

To make it works, just open a terminal and type `npm run dev`.

Then use this [link](http://localhost:8080) to visit your local app url.

## Loaders

We are using WebPack loaders to import the files we need. In this app we are working with Stylus, ES2015 and React, so we need to use:

#### Stylus

* [style-loader](https://github.com/webpack/style-loader)
* [css-loader](https://github.com/webpack/css-loader)
* [stylus-loader](https://github.com/shama/stylus-loader)

#### ES2015 + React

* [babel-core](https://github.com/babel/babel)
* [babel-preset-es2015](https://babeljs.io/docs/plugins/preset-es2015/)
* [babel-preset-stage-2](https://babeljs.io/docs/plugins/preset-stage-2/)
* [babel-preset-es2015](https://babeljs.io/docs/plugins/preset-react/)
* [babel-loader](https://github.com/babel/babel-loader)
