const path = require("path")
const {override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src/'),
    "@a": path.resolve(__dirname, 'src/assets/'),
    "@c": path.resolve(__dirname, 'src/components'),
    "@u": path.resolve(__dirname, 'src/utils'),
    '@h': path.resolve(__dirname, 'src/hoc')
  }),
  addDecoratorsLegacy()
);