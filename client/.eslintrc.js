module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks', "@emotion"],
    extends: [
      'airbnb', 
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended', 
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'import/prefer-default-export':'off',
      'prettier/prettier': 0,
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'no-use-before-define': 'off',
      'import/extensions': [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never",
        }
     ],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  };