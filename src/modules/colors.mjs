/**
 * Color functions
 */

/**
 * Linear color interpolation
 * @param {String} a - First color
 * @param {String} b - Second color
 * @param {Number} amt - amount to interpolate
 * @returns {String} Interpolated color
 */
export const lerpColor = (a, b, amount) => {
  var ah = parseInt(a.replace(/#/g, ''), 16)
  var ar = ah >> 16
  var ag = (ah >> 8) & 0xff
  var ab = ah & 0xff
  var bh = parseInt(b.replace(/#/g, ''), 16)
  var br = bh >> 16
  var bg = (bh >> 8) & 0xff
  var bb = bh & 0xff
  var rr = ar + amount * (br - ar)
  var rg = ag + amount * (bg - ag)
  var rb = ab + amount * (bb - ab)
  return (
    '#' + (((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0).toString(16).slice(1)
  )
}
