const babelOptions = {
  presets: ['babel-preset-gatsby'],
  root: true,
};

module.exports = require( 'babel-jest' ).createTransformer( babelOptions );
