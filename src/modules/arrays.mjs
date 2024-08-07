/**
 * Array functions
 */

/**
 * Copy array
 * @param {Array} source - source array
 * @returns {Array} copy of the array
 */
export const copyArray = (source) => {
  const array = Array(source.length)
  for (let i = 0; i < source.length; i++) {
    array[i] = source[i]
  }
  return array
}

/**
 * Shuffle array
 * @param {Array} source - source array
 * @returns {Array} shuffled array copy
 */
export const shuffleArray = (source) => {
  const array = copyArray(source)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/**
 * Filter array unique
 * @param {Array} source - source array
 * @returns {Array} array with unique elements only
 */
export const filterUnique = (source) => {
  return [...new Set(source)]
}

/**
 * Fuzzy search element in list
 * @param {Array} list - Array of terms
 * @param {String} searchValue - search value to find
 * @returns {Array} elements matching search value
 */
export const fuzzySearch = (list, searchValue) => {
  const buf = '.*' + searchValue.replace(/(.)/g, '$1.*').toLowerCase()
  var reg = new RegExp(buf)
  return list.filter((e) => {
    return reg.test(e.toLowerCase())
  })
}

/**
 * Check if array contains
 * @param {any} elem - element to find in array
 * @param {Array} arr - array to look in
 * @returns {boolean} - true when element is in array
 */
export const contains = (elem, arr) => {
  return arr.indexOf(elem) !== -1
}
