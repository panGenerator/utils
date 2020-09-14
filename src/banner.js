const pkg = require('../package.json')
const year = new Date().getFullYear()

module.exports = (pluginFilename) => {
  return `/*!
 * @license ${pkg.name} v${pkg.version}, Copyright © ${year} ${pkg.author}
 * Released under ${pkg.license} license
 * ${pkg.homepage}
 */`
}
