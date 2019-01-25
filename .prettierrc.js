/**
 * @prettier
 */
module.exports = {
  arrowParens: 'always',
  printWidth: 80,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  tabWidth: 2,
  // apply different configuration to different files
  overrides: [
    {
      files: ['.*.js', '*.js', '*.ts', 'json'],
      options: {
        tabWidth: 2,
      },
    },
  ],
}
