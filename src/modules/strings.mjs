/**
 * String functions
 */

/**
 * Generate timestamp name
 * @returns {String} timestamp name
 */
export const timestampName = () => {
  var tzoffset = new Date().getTimezoneOffset() * 60000
  let date = new Date(Date.now() - tzoffset)
    .toISOString()
    .replace(/z|t/gi, ' ')
    .trim()
    .replace(/:/gi, '-')
  date = date.substring(0, date.indexOf('.'))
  return date
}
const table = {
  Ą: 'A',
  Ć: 'C',
  Ę: 'E',
  Ł: 'L',
  Ń: 'N',
  Ó: 'O',
  Ś: 'S',
  Ź: 'Z',
  Ż: 'Z',
  ą: 'a',
  ć: 'c',
  ę: 'e',
  ł: 'l',
  ń: 'n',
  ó: 'o',
  ś: 's',
  ź: 'z',
  ż: 'z',
}

/**
 * Remove polish diacritics
 * @param {String} str - string with diacritics
 * @returns {String} string without diacritics
 */
export const removeDiacritics = (str) => {
  return str.replace(/([ĄĆĘŁŃÓŚŹŻąćęłńóśźż])/g, function (l) {
    return table[l]
  })
}

/**
 * Remove all non alphanumeric characters
 * @param {String} str - string with non alphanumeric characters
 * @returns {String} string without non alphanumeric characters
 */
export const removeNonAlphaNumeric = (str) => str.replace(/[^A-Za-z0-9]/g, '')

/**
 * Split string to N sized chunks
 * @param {String} str - string to split
 * @param {Number} n - chunk length
 * @param {Boolean} discard - discard chunks shorter than N
 * @returns {Array} array of string chunks
 */
export const splitChunks = (str, n, discard) => {
  const chunks = str.split(new RegExp('(.{' + n.toString() + '})'))
  return discard
    ? chunks.filter((x) => x.length === n)
    : chunks.filter((x) => x.length > 0)
}

/**
 * Convert string to custom separator case
 * @param {string} str - string to convert
 * @returns {string} custom cased string
 */
export const sepCase = (str, sep = '-') => {
  const text = removeDiacritics(str)
  // text = removeNonAlphaNumeric(text)
  return text
    .replace(/[A-Z]/g, (letter, index) => {
      const lcLet = letter.toLowerCase()
      return index ? sep + lcLet : lcLet
    })
    .replace(/([-_ ]){1,}/g, sep)
}

/**
 * Convert string to snake case
 * @param {string} str - string to convert
 * @returns {string} snake cased string
 */
export const snakeCase = (str) => {
  return sepCase(str, '_')
}

/**
 * Convert string to kebab case
 * @param {string} str - string to convert
 * @returns {string} kebab cased string
 */
export const kebabCase = (str) => {
  return sepCase(str, '-')
}

/**
 * Convert string to camel case
 * @param {string} str - string to convert
 * @returns {string} camel cased string
 */
export const camelCase = (str) => {
  const text = removeDiacritics(str)
  // text = removeNonAlphaNumeric(text)
  return (text.slice(0, 1).toLowerCase() + text.slice(1))
    .replace(/([-_ ]){1,}/g, ' ')
    .split(/[-_ ]/)
    .reduce((cur, acc) => {
      return cur + acc[0].toUpperCase() + acc.substring(1)
    })
}
