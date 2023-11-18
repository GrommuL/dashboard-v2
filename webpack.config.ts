import path from 'path'
import { Configuration } from 'webpack'
import { buildWebpackConfig } from './config/build/build-webpack-config'
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'app', 'main.tsx'),
		build: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
		locales: path.resolve(__dirname, 'public', 'locales'),
		buildLocales: path.resolve(__dirname, 'dist', 'locales')
	}

	const mode: BuildMode = env.mode || 'development'
	const PORT = env.port || 3000

	const isDev = mode === 'development'

	const isProduction = env.NODE_ENV === 'production'
	const envFile = isProduction ? '.env.production' : '.env.development'
	const NODE_ENV = env.NODE_ENV

	const config: Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
		envFile,
		NODE_ENV
	})

	return config
}
