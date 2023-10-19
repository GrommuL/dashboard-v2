import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ProgressPlugin, WebpackPluginInstance } from 'webpack'
import { BuildOptions } from './types/config'

export const buildPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({ template: paths.html }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
}
