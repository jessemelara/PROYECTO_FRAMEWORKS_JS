import { resolve } from 'path';
import webpack from 'webpack';

export const entry = './src/index.js';
export const output = {
  filename: 'bundle.js',
  path: resolve(__dirname, '/'),
};
export const devtool = 'source-map';
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
};
export const mode = 'development';