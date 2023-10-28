import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/build-css-loader'
import { buildBabelLoader } from './loaders/build-babel-loader'

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
	const { isDev } = options

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack']
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader'
			}
		]
	}

	const babelLoader = buildBabelLoader(options)

	const cssLoader = buildCssLoader(isDev)

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}

	return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
