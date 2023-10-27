import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {
	ProgressPlugin,
	WebpackPluginInstance,
	DefinePlugin,
	HotModuleReplacementPlugin
} from 'webpack'
import { BuildOptions } from './types/config'

export const buildPlugins = ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] => {
	const plugins = [
		new HTMLWebpackPlugin({ template: paths.html }),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev)
		})
	]

	if (isDev) {
		plugins.push(new HotModuleReplacementPlugin())
	}
	return plugins
}
