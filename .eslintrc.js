module.exports = {
	env: {
		browser: true,
		node: true,
		commonjs: true,
		amd: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'prefer-rest-params': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/ban-types': 0,
		'@typescript-eslint/no-empty-function': 0,
	},
}
