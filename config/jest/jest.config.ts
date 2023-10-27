import path from 'path'
import type { Config } from 'jest'

const config: Config = {
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	moduleDirectories: ['node_modules'],
	modulePaths: ['<rootDir>src'],
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
	rootDir: '../../',
	setupFilesAfterEnv: ['<rootDir>config/jest/setup-tests.ts'],
	moduleNameMapper: {
		'\\.s?css$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jest-empty-component.tsx')
	}
}

export default config
