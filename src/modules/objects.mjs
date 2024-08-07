/**
 * Object functions
 */

/**
 * Copy object excluding property
 * @param {Object} obj - Object to copy
 * @param {string} prop - property name
 * @returns {Object} - copied object
 */

export const shallowCopyExcluding = (obj, prop) => {
  const { [prop]: _, ...copy } = obj
  return copy
}
