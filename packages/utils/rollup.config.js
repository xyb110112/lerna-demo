import { defineConfig } from 'rollup'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescriptEngine from 'typescript'
import pkg from './package.json'

const config = {
	input: 'index.ts',
	output: [
		{
			file: pkg.main,
			format: 'umd',
			exports: 'named',
			name: 'Utils',
		},
		{
			file: pkg.module,
			format: 'es',
			exports: 'named',
		},
	],
	plugins: [
		postcss({
			plugins: [],
			minimize: true,
			extract: true,
		}),
		external({
			includeDependencies: true,
		}),
		typescript({
			useTsconfigDeclarationDir: true,
			typescript: typescriptEngine,
			include: ['*.js+(|x)', '**/*.js+(|x)'],
			exclude: [
				'coverage',
				'config',
				'dist',
				'node_modules/**',
				'*.test.{js+(|x), ts+(|x)}',
				'**/*.test.{js+(|x), ts+(|x)}',
			],
		}),
		commonjs(),
		babel({
			extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
			babelHelpers: 'runtime',
			exclude: /node_modules/,
		}),
		resolve(),
		terser(),
	],
}

export default defineConfig(config)
