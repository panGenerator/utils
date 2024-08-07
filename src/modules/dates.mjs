/**
 * Date functions
 */
/**
 * Get quarter from date
 * @param {Date} d - Date to get quarter from
 * @returns {Array} year and quarter (1-4)
 */
export const getQuarter = (d) => {
  d = d || new Date()
  return [d.getFullYear(), Math.floor(d.getMonth() / 3) + 1]
} // getQuarter().join('Q')

/**
 * Get quarter extent
 * @param {Number} quarter - quarter (1-4)
 * @param {Number} year - full year
 * @returns {Array} start and end date of quarter
 */
export const quarterExtent = (quarter, year) => {
  return [
    new Date(
      `${year}-${((quarter - 1) * 3 + 1).toString().padStart(2, '0')}-01`
    ),
    new Date(
      `${year}-${(quarter * 3).toString().padStart(2, '0')}-${
        quarter === 1 || quarter === 4 ? 31 : 30
      }`
    ),
  ]
}

/**
 * Get all dates between two dates
 * @param {Date} start - start date
 * @param {Date} end - end date
 * @returns {Array} all dates between start and end
 */
export const datesBetween = (start, end) => {
  const output = []

  for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
    output.push(new Date(date))
  }
  return output
}
