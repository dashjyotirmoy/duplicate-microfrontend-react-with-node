import path from 'path';
import webpack from 'webpack';
import DotEnvPlugin from 'dotenv-webpack';

import commonPlugins from './common-plugins';
import rules from './common-rules';

const config = (env: any) => ({
  mode: 'development',
  output: {
    publicPath: 'auto',
  },
  entry: './src/index',
  module: {
    rules,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  plugins: [
    ...commonPlugins,
    new webpack.HotModuleReplacementPlugin(),
    new DotEnvPlugin({ path: path.join(__dirname, 'dev-config.env') }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.normalize(path.join(__dirname, '..', 'build')),
    historyApiFallback: true,
    port: 3001,
    open: false,
    hot: true
  },
});

export default config;
