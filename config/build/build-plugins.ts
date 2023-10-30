import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import Dotenv from 'dotenv-webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import {
	ProgressPlugin,
	WebpackPluginInstance,
	DefinePlugin,
	HotModuleReplacementPlugin
} from 'webpack'
import { BuildOptions } from './types/config'

export const buildPlugins = ({
	paths,
	isDev,
	envFile,
	NODE_ENV
}: BuildOptions): WebpackPluginInstance[] => {
	const plugins = [
		new HTMLWebpackPlugin({ template: paths.html }),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
		new Dotenv({
			path: envFile
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
		})
	]

	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin())
		plugins.push(new HotModuleReplacementPlugin())
	}
	return plugins
}
