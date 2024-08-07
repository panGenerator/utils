//const pkg = require('../package.json')
import pkg from "../package.json" with { "type": "json" }
const year = new Date().getFullYear();

export default (pluginFilename) => {
  return `/*!
 * @license ${pkg.name} v${pkg.version}, Copyright © ${year} ${pkg.author}
 * Released under ${pkg.license} license
 * ${pkg.homepage}
 */`;
};
