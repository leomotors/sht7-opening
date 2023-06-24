// @ts-check

/** @satisfies {import('prettier').Config} */
const config = {
  useTabs: false,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  pluginSearchDirs: false,
};

module.exports = config;
