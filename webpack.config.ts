import path from 'path'
import { Configuration } from 'webpack'
import { buildWebpackConfig } from './config/build/build-webpack-config'
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'app', 'main.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode: BuildMode = env.mode || 'development'
  const PORT = env.port || 3000

  const isDev = mode === 'development'

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })

  return config
}
