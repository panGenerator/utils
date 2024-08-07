/**
 * Math functions
 */

/**
 * Map a number from one range to another
 * @param {Number} value - Number to map
 * @param {Number} low1 - Source range lower bound
 * @param {Number} high1 - Source range upper bound
 * @param {Number} low2 - Target range lower bound
 * @param {Number} high2 - Target range upper bound
 * @returns {Number} Mapped number
 */
export const map = (value, low1, high1, low2, high2) => {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
}

/**
 * Clamp a number to range
 * @param {Number} value - Number to clamp
 * @param {Number} min - Range lower bound
 * @param {Number} max - Range upper bound
 * @returns {Number} Clamped number
 */
export const clamp = (val, min, max) => {
  return val > max ? max : val < min ? min : val
}

/**
 * Normalize a number
 * @param {Number} value - value to normalize
 * @param {Number} start - Source range lower bound
 * @param {Number} stop - Source range upper bound
 * @returns {Number} normalized number (0.0 - 1.0)
 */
export const norm = (value, start, stop) => {
  return (value - start) / (stop - start)
}

/**
 * Linear interpolation
 * @param {Number} start - First value
 * @param {Number} stop - Second value
 * @param {Number} amt - amount to interpolate
 * @returns {Number} Interpolated value
 */
export const lerp = (start, stop, amt) => {
  return start + (stop - start) * amt
}

/**
 * Square
 * @param {Number} a - Number to square
 * @returns {Number} squared number
 */
export const square = (a) => {
  return a * a
}

/**
 * Convert angle in radians to degrees
 * @param {Number} radians - angle in radians
 * @returns {Number} angle in degrees
 */
export const degrees = (radians) => {
  return (radians * 180.0) / Math.PI
}

/**
 * Convert angle in degrees to radians
 * @param {Number} degrees - angle in degrees
 * @returns {Number} angle in radians
 */
export const radians = (degrees) => {
  return (degrees * Math.PI) / 180.0
}

/**
 * Round number to precision
 * @param {Number} value - value to round
 * @param {Number} precision - decimal places
 * @returns {Number} rounded number
 */
export const precision = (value, precision) => {
  return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision)
}
