module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
		'plugin:@tanstack/eslint-plugin-query/recommended'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier', '@tanstack/query'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'@typescript-eslint/no-unused-vars': 'off',
		'prettier/prettier': ['error', { endOfLine: 'auto', printWidth: 100 }],
		'@tanstack/query/exhaustive-deps': 'error',
		'@tanstack/query/stable-query-client': 'error'
		// 'i18next/no-literal-string': [
		// 	'error',
		// 	{ markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }
		// ]
	}
}
