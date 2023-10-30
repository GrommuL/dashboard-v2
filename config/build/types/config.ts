export type BuildMode = 'production' | 'development'

export interface BuildPaths {
	entry: string
	build: string
	html: string
	src: string
}

export interface BuildEnv {
	mode: BuildMode
	port: number
	NODE_ENV: BuildMode
}

export interface BuildOptions {
	mode: BuildMode
	paths: BuildPaths
	isDev: boolean
	port: number
	envFile: string
	NODE_ENV: BuildMode
}
