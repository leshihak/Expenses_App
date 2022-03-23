module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
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
		'react/react-in-jsx-scope': 0,
		'react/jsx-uses-react': 0,
		'no-console': [1, { allow: ['warn', 'error'] }],
		'no-debugger': 1,
		'no-empty-function': [
			1,
			{
				allow: [
					'arrowFunctions',
					'methods',
					'constructors',
					'asyncFunctions',
					'asyncMethods',
				],
			},
		],
	},
};
