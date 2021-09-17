import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import DotEnvPlugin from 'dotenv-webpack';

import commonPlugins from './common-plugins';
import rules from './common-rules';

const config = (env: any) => ({
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.normalize(path.join(__dirname, '..', 'build')),
    filename: '[name].[contenthash].js',
    publicPath: 'auto',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  plugins: [
    ...commonPlugins,
    new CleanWebpackPlugin(),
    new DotEnvPlugin({ path: path.join(__dirname, 'prod-config.env') }),
  ],
});

export default config;
