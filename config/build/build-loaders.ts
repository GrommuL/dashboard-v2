import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/build-css-loader'

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
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

	const babelLoader = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }]]
			}
		}
	}

	const cssLoader = buildCssLoader(isDev)

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}

	return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
