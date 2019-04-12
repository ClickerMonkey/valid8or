const { resolve } = require('path');

const WEB = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts' ]
  },
  devtool: 'source-map',
  output: {
    filename: 'valid8or.js',
    path: resolve(__dirname, 'dist'),
    library: 'v8',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  }
}

const NODE = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts' ]
  },
  devtool: 'source-map',
  output: {
    filename: 'valid8or.js',
    path: resolve(__dirname, 'dist'),
    library: 'v8',
    libraryTarget: 'commonjs2'
  }
}

module.exports = WEB;
