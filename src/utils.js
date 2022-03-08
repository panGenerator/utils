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
 * @typedef Circle
 * @type {Object}
 * @property {Number} x - x coordinate of the center point
 * @property {Number} y - y coordinate of the center point
 * @property {Number} r - radius
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
  return Math.sqrt(dist2(A, B))
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
 * Find intersection points between two circles
 * @alias module:utils.intersection
 * @param {Circle} c1 - first circle
 * @param {Circle} c2 - second circle
 * @returns {(Array|Boolean)} intersection or false (if no intersection)
 */
const intersection = (c1, c2) => {
  const dx = c2.x - c1.x
  const dy = c2.y - c1.y
  const d = Math.sqrt((dy * dy) + (dx * dx))

  if (d > (c1.r + c2.r)) {
    return false
  }
  if (d < Math.abs(c1.r - c2.r)) {
    return false
  }
  const a = ((c1.r * c1.r) - (c2.r * c2.r) + (d * d)) / (2.0 * d)

  const xc = c1.x + (dx * a / d)
  const yc = c1.y + (dy * a / d)

  const h = Math.sqrt((c1.r * c1.r) - (a * a))

  const rx = -dy * (h / d)
  const ry = dx * (h / d)

  return [{ x: xc + rx, y: yc + ry }, { x: xc - rx, y: yc - ry }]
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
  return [...(new Set(source))]
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
 * Get quarter extent
 * @alias module:utils.quarterExtent
 * @param {Number} quarter - quarter (1-4)
 * @param {Number} year - full year
 * @returns {Array} start and end date of quarter
 */
const quarterExtent = (quarter, year) => {
  return [
    new Date(`${year}-${((quarter - 1) * 3 + 1).toString().padStart(2, '0')}-01`),
    new Date(
      `${year}-${(quarter * 3).toString().padStart(2, '0')}-${
        quarter === 1 || quarter === 4 ? 31 : 30
      }`
    )
  ]
}

/**
 * Download file from base64 data uri
 * @alias module:utils.downloadDataUri
 * @param {Object} options - options for the downloaded file
 * @param {String} options.data - contents of the file
 * @param {String} options.filename - name of the file
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

/**
 * Convert coordinates from polar to cartesian
 * @alias module:utils.polarToCartesian
 * @param {Number} r - radius
 * @param {Number} angle - angle
 * @returns {Point} cartesian coordinates
 */
const polarToCartesian = (r, angle) => {
  return {
    x: r * Math.cos(angle),
    y: r * Math.sin(angle)
  }
}

/**
 * Convert coordinates from cartesian to polar
 * @alias module:utils.cartesianToPolar
 * @param {Number} x - x coordinate
 * @param {Number} y - y coordinate
 * @returns {Object} polar coordinates
 */
const cartesianToPolar = (x, y) => {
  let angle = Math.atan2(y, x)
  if (angle < 0) { while (angle < 0) { angle += Math.PI * 2.0 } }
  if (angle >= Math.PI * 2.0) { while (angle >= Math.PI) { angle -= Math.PI * 2.0 } }
  return {
    r: Math.sqrt(x * x + y * y),
    angle
  }
}

/**
 * Get element page offset
 * @alias module:utils.pageOffset
 * @param {Object} elem - HTML element
 * @returns {Object} top and left page offset
 */
const pageOffset = (elem) => {
  const rect = elem.getBoundingClientRect()
  const win = elem.ownerDocument.defaultView
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  }
}

/**
 * Fuzzy search element in list
 * @alias module:utils.fuzzySearch
 * @param {Array} list - Array of terms
 * @param {String} searchValue - search value to find
 * @returns {Array} elements matching search value
 */
const fuzzySearch = (list, searchValue) => {
  const buf = '.*' + searchValue.replace(/(.)/g, '$1.*').toLowerCase()
  var reg = new RegExp(buf)
  return list.filter((e) => {
    return reg.test(e.toLowerCase())
  })
}

/**
 * Distance between two points (2D and 3D) squared
 * @alias module:utils.dist2
 * @param {Point} A - First point
 * @param {Point} B - Second point
 * @returns {Number} squared distance between the points
 */
const dist2 = (A, B) => {
  return square(B.x - A.x) + square(B.y - A.y) + ((A.z !== undefined && B.z !== undefined) ? square(B.z - A.z) : 0)
}

/**
 * Distance between point and segment squared
 * @alias module:utils.distToSegment2
 * @param {Point} A - First point
 * @param {Point} S - Segment start
 * @param {Point} E - Segment end
 * @returns {Number} squared distance between the point and the segment
 */
const distToSegment2 = (A, S, E) => {
  const l2 = dist2(S, E)

  if (l2 === 0) return dist2(A, S)

  const t = ((A.x - S.x) * (E.x - S.x) + (A.y - S.y) * (E.y - S.y)) / l2

  if (t < 0) return dist2(A, S)
  if (t > 1) return dist2(A, E)

  return dist2(A, { x: S.x + t * (E.x - S.x), y: S.y + t * (E.y - S.y) })
}

/**
 * Distance between point and segment
 * @alias module:utils.distToSegment
 * @param {Point} A - First point
 * @param {Point} S - Segment start
 * @param {Point} E - Segment end
 * @returns {Number} distance between the point and the segment
 */
const distToSegment = (A, S, E) => {
  return Math.sqrt(distToSegment2(A, S, E))
}

/**
 * Convert string to custom separator case
 * @alias module:utils.sepCase
 * @param {string} str - string to convert
 * @returns {string} custom cased string
 */
const sepCase = (str, sep = '-') => {
  const text = removeDiacritics(str)
  return text
    .replace(/[A-Z]/g, (letter, index) => {
      const lcLet = letter.toLowerCase()
      return index ? sep + lcLet : lcLet
    })
    .replace(/([-_ ]){1,}/g, sep)
}

/**
 * Convert string to snake case
 * @alias module:utils.toSnakeCase
 * @param {string} str - string to convert
 * @returns {string} snake cased string
 */
const snakeCase = (str) => {
  return sepCase(str, '_')
}

/**
 * Convert string to kebab case
 * @alias module:utils.toKebabCase
 * @param {string} str - string to convert
 * @returns {string} kebab cased string
 */
const kebabCase = (str) => {
  return sepCase(str, '-')
}

/**
 * Convert string to camel case
 * @alias module:utils.toCamelCase
 * @param {string} str - string to convert
 * @returns {string} camel cased string
 */
const camelCase = (str) => {
  const text = removeDiacritics(str)
  return (text.slice(0, 1).toLowerCase() + text.slice(1))
    .replace(/([-_ ]){1,}/g, ' ')
    .split(/[-_ ]/)
    .reduce((cur, acc) => {
      return cur + acc[0].toUpperCase() + acc.substring(1)
    })
}

export default { map, clamp, random, randomDir, lerp, lerp3, lerpedPoints, square, dist, norm, degrees, radians, intersection, randomName, timestampName, randomIndex, copyArray, shuffleArray, filterUnique, lerpColor, precision, loadJSON, removeDiacritics, splitChunks, getQuarter, quarterExtent, downloadDataUri, polarToCartesian, cartesianToPolar, pageOffset, fuzzySearch, dist2, distToSegment2, distToSegment, sepCase, snakeCase, kebabCase, camelCase }
