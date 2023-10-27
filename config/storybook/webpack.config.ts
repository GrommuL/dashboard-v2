import path from 'path'
import { Configuration } from 'webpack'
import { BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/build-css-loader'

export default ({ config }: { config: Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		entry: '',
		html: '',
		src: path.resolve(__dirname, '..', '..', 'src')
	}
	config.resolve.modules.push(paths.src)
	config.resolve.extensions.push('.ts', '.tsx')

	config.module.rules.push(buildCssLoader(true))

	return config
}
