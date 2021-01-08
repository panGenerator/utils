/**
 * Various functions used in javascript tools
 * @module utils
 */

/**
 * @typedef Point
 * @type {Object}
 * @property {Number} x - x coordinate
 * @property {Number} y - y coordinate
 * @property {Number} [z] - z coordinate
 */

/**
 * Map a number from one range to another
 * @alias module:utils.map
 * @param {Number} value - Number to map
 * @param {Number} low1 - Source range lower bound
 * @param {Number} high1 - Source range upper bound
 * @param {Number} low2 - Target range lower bound
 * @param {Number} high2 - Target range upper bound
 * @returns {Number} Mapped number
 */
const map = (value, low1, high1, low2, high2) => {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1)
}

/**
 * Clamp a number to range
 * @alias module:utils.clamp
 * @param {Number} value - Number to clamp
 * @param {Number} min - Range lower bound
 * @param {Number} max - Range upper bound
 * @returns {Number} Clamped number
 */
const clamp = (val, min, max) => {
  return val > max ? max : val < min ? min : val
}

/**
 * Normalize a number
 * @alias module:utils.norm
 * @param {Number} value - value to normalize
 * @param {Number} start - Source range lower bound
 * @param {Number} stop - Source range upper bound
 * @returns {Number} normalized number (0.0 - 1.0)
 */
const norm = (value, start, stop) => {
  return (value - start) / (stop - start)
}

/**
 * Generate random number from range
 * @alias module:utils.random
 * @param {Number} [low] - Range lower bound
 * @param {Number} high - Range upper bound
 * @returns {Number} Random number
 */
const random = (low, high) => {
  if (high === undefined) {
    high = low
    low = 0
  }
  return low + Math.random() * (high - low)
}

/**
 * Generate random direction (-1 or 1)
 * @alias module:utils.randomDir
 * @returns {Number} Random direction
 */
const randomDir = () => {
  return Math.random() > 0.5 ? 1 : -1
}

/**
 * Linear interpolation
 * @alias module:utils.lerp
 * @param {Number} start - First value
 * @param {Number} stop - Second value
 * @param {Number} amt - amount to interpolate
 * @returns {Number} Interpolated value
 */
const lerp = (start, stop, amt) => {
  return start + (stop - start) * amt
}

/**
 * Linear interpolation in 3D
 * @alias module:utils.lerp3
 * @param {Point} A - First point
 * @param {Point} B - Second point
 * @param {Number} amt - amount to interpolate
 * @returns {Point} Interpolated point
 */
const lerp3 = (A, B, amt) => {
  return { x: lerp(A.x, B.x, amt), y: lerp(A.y, B.y, amt), z: lerp(A.z, B.z, amt) }
}

/**
 * Linear interpolation in 3D array
 * @alias module:utils.lerpedPoints
 * @param {Point} A - First point
 * @param {Point} B - Second point
 * @param {Number} count - Point count
 * @returns {Point[]} Interpolated points
 */
const lerpedPoints = (A, B, count) => {
  const points = []
  const step = 1 / (count + 1)
  for (let i = 0; i < count; i++) {
    points.push(lerp3(A, B, step + step * i))
  }
  return points
}

/**
 * Square
 * @alias module:utils.square
 * @param {Number} a - Number to square
 * @returns {Number} squared number
 */
const square = (a) => {
  return a * a
}

/**
 * Distance between two points (2D and 3D)
 * @alias module:utils.dist
 * @param {Point} A - First point
 * @param {Point} B - Second point
 * @returns {Number} distance between the points
 */
const dist = (A, B) => {
  return Math.sqrt(square(B.x - A.x) + square(B.y - A.y) + ((A.z !== undefined && B.z !== undefined) ? square(B.z - A.z) : 0))
}

/**
 * Convert angle in radians to degrees
 * @alias module:utils.degrees
 * @param {Number} radians - angle in radians
 * @returns {Number} angle in degrees
 */
const degrees = (radians) => {
  return radians * 180.0 / Math.PI
}

/**
 * Convert angle in degrees to radians
 * @alias module:utils.radians
 * @param {Number} degrees - angle in degrees
 * @returns {Number} angle in radians
 */
const radians = (degrees) => {
  return degrees * Math.PI / 180.0
}

/**
 * Generate random name
 * @alias module:utils.randomName
 * @param {Number} N - length of the name
 * @returns {String} random name
 */
const randomName = (N) => {
  return (Math.random().toString(36) + '00000000000000000').slice(2, N + 2)
}

/**
 * Generate timestamp name
 * @alias module:utils.timestampName
 * @returns {String} timestamp name
 */
const timestampName = () => {
  var tzoffset = (new Date()).getTimezoneOffset() * 60000
  let date = (new Date(Date.now() - tzoffset)).toISOString().replace(/z|t/gi, ' ').trim().replace(/:/gi, '-')
  date = date.substring(0, date.indexOf('.'))
  return date
}

/**
 * Generate random name
 * @alias module:utils.randomIndex
 * @param {Number} N - max index
 * @returns {Number} random index
 */
const randomIndex = (N) => {
  return Math.floor(Math.random() * N)
}
/**
 * Copy array
 * @alias module:utils.copyArray
 * @param {Array} source - source array
 * @returns {Array} array copy
 */
const copyArray = (source) => {
  const array = Array(source.length)
  for (let i = 0; i < source.length; i++) {
    array[i] = source[i]
  }
  return array
}

/**
 * Shuffle array
 * @alias module:utils.shuffleArray
 * @param {Array} source - source array
 * @returns {Array} shuffled array copy
 */
const shuffleArray = (source) => {
  const array = copyArray(source)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/**
 * Filter array unique
 * @alias module:utils.filterUnique
 * @param {Array} source - source array
 * @returns {Array} array with unique elements only
 */
const filterUnique = (source) => {
  return source.filter((value, index, self) => {
    return self.indexOf(value) === index
  })
}

/**
 * Linear color interpolation
 * @alias module:utils.lerpColor
 * @param {String} a - First color
 * @param {String} b - Second color
 * @param {Number} amt - amount to interpolate
 * @returns {String} Interpolated color
 */
const lerpColor = (a, b, amount) => {
  var ah = parseInt(a.replace(/#/g, ''), 16); var ar = ah >> 16; var ag = ah >> 8 & 0xff; var ab = ah & 0xff; var bh = parseInt(b.replace(/#/g, ''), 16); var br = bh >> 16; var bg = bh >> 8 & 0xff; var bb = bh & 0xff; var rr = ar + amount * (br - ar); var rg = ag + amount * (bg - ag); var rb = ab + amount * (bb - ab)
  return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1)
}

/**
 * Round number to precision
 * @alias module:utils.precision
 * @param {Number} value - value to round
 * @param {Number} precision - decimal places
 * @returns {Number} rounded number
 */
const precision = (value, precision) => {
  return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision)
}

/**
 * Load JSON
 * @alias module:utils.loadJSON
 * @param {String} address - address of JSON to load
 * @param {Function} callback - function to call on result
 */
const loadJSON = (address, callback) => {
  const xObj = new XMLHttpRequest()
  xObj.overrideMimeType('application/json')
  xObj.open('GET', address, true)
  xObj.onreadystatechange = () => {
    if (xObj.readyState === 4 && xObj.status === 200) {
      callback(JSON.parse(xObj.responseText))
    }
  }
  xObj.send(null)
}

const table = { Ą: 'A', Ć: 'C', Ę: 'E', Ł: 'L', Ń: 'N', Ó: 'O', Ś: 'S', Ź: 'Z', Ż: 'Z', ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' }
/**
 * Remove polish diacritics
 * @alias module:utils.removeDiacritics
 * @param {String} str - string with diacritics
 * @returns {String} string without diacritics
 */
const removeDiacritics = (str) => str.replace(/([ĄĆĘŁŃÓŚŹŻąćęłńóśźż])/g, function (l) { return table[l] })

/**
 * Split string to N sized chunks
 * @alias module:utils.splitChunks
 * @param {String} str - string to split
 * @param {Number} n - chunk length
 * @param {Boolean} discard - discard chunks shorter than N
 * @returns {Array} array of string chunks
 */
const splitChunks = (str, n, discard) => {
  const chunks = str.split(new RegExp('(.{' + n.toString() + '})'))
  return discard ? chunks.filter(x => x.length === n) : chunks.filter(x => x.length > 0)
}

/**
 * Get quarter from date
 * @alias module:utils.getQuarter
 * @param {Date} d - Date to get quarter from
 * @returns {Array} year and quarter (1-4)
 */
const getQuarter = (d) => {
  d = d || new Date()
  return [d.getFullYear(), Math.floor((d.getMonth()) / 3) + 1]
} // getQuarter().join('Q')

/**
 * Download file from base64 data uri
 * @alias module:utils.downloadDataUri
 * @param {Object} options - options for the downloaded file
 * @param {string} options.data - contents of the file
 * @param {string} options.filename - name of the file
 */
const downloadDataUri = (options) => {
  var element = document.createElement('a')
  element.setAttribute('href', options.data)
  element.setAttribute('download', options.filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

export default { map, clamp, random, randomDir, lerp, lerp3, lerpedPoints, square, dist, norm, degrees, radians, randomName, timestampName, randomIndex, copyArray, shuffleArray, filterUnique, lerpColor, precision, loadJSON, removeDiacritics, splitChunks, getQuarter, downloadDataUri }
