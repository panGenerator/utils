/**
 * Random functions
 */

/**
 * Generate random number from range
 * @param {Number} [low] - Range lower bound
 * @param {Number} high - Range upper bound
 * @returns {Number} Random number
 */
export const random = (low, high) => {
  if (high === undefined) {
    high = low
    low = 0
  }
  return low + Math.random() * (high - low)
}

/**
 * Generate random direction (-1 or 1)
 * @returns {Number} Random direction
 */
export const randomDir = () => {
  return Math.random() > 0.5 ? 1 : -1
}

/**
 * Generate random index
 * @param {Number} N - max index
 * @returns {Number} random index
 */
export const randomIndex = (N) => {
  return Math.floor(Math.random() * N)
}

/**
 * Generate random name
 * @param {Number} N - length of the name
 * @returns {String} random name
 */
export const randomName = (N) => {
  return (Math.random().toString(36) + '00000000000000000').slice(2, N + 2)
}
