/* global define */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.returnExports = factory()
  }
}(typeof self !== 'undefined' ? self : this, function () {
  /* ----- START ----- */

  const map = (value, low1, high1, low2, high2) => {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1)
  }

  const clamp = (val, min, max) => {
    return val > max ? max : val < min ? min : val
  }

  const random = (low, high) => {
    if (high === undefined) {
      high = low
      low = 0
    }
    return low + Math.random() * (high - low)
  }

  const randomDir = () => {
    return Math.random() > 0.5 ? 1 : -1
  }

  const lerp = (start, stop, amt) => {
    return start + (stop - start) * amt
  }

  const lerp3 = (A, B, amt) => {
    return { x: lerp(A.x, B.x, amt), y: lerp(A.y, B.y, amt), z: lerp(A.z, B.z, amt) }
  }

  const lerpedPoints = (A, B, count) => {
    const points = []
    const step = 1 / (count + 1)
    for (let i = 0; i < count; i++) {
      points.push(lerp3(A, B, step + step * i))
    }
    return points
  }

  const square = (a) => {
    return a * a
  }

  const dist = (A, B) => {
    return Math.sqrt(square(B.x - A.x) + square(B.y - A.y) + ((A.z !== undefined && B.z !== undefined) ? square(B.z - A.z) : 0))
  }

  const norm = (value, start, stop) => {
    return (value - start) / (stop - start)
  }

  const degrees = (radians) => {
    return radians * 180.0 / Math.PI
  }

  const radians = (degrees) => {
    return degrees * Math.PI / 180.0
  }

  const randomName = (N) => {
    return (Math.random().toString(36) + '00000000000000000').slice(2, N + 2)
  }

  const timestampName = () => {
    var tzoffset = (new Date()).getTimezoneOffset() * 60000
    let date = (new Date(Date.now() - tzoffset)).toISOString().replace(/z|t/gi, ' ').trim().replace(/:/gi, '-')
    date = date.substring(0, date.indexOf('.'))
    return date
  }

  const randomIndex = (N) => {
    return Math.floor(Math.random() * N)
  }

  const copyArray = (source) => {
    const array = Array(source.length)
    for (let i = 0; i < source.length; i++) {
      array[i] = source[i]
    }
    return array
  }

  const shuffleArray = (source) => {
    const array = copyArray(source)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const lerpColor = (a, b, amount) => {
    var ah = parseInt(a.replace(/#/g, ''), 16); var ar = ah >> 16; var ag = ah >> 8 & 0xff; var ab = ah & 0xff; var bh = parseInt(b.replace(/#/g, ''), 16); var br = bh >> 16; var bg = bh >> 8 & 0xff; var bb = bh & 0xff; var rr = ar + amount * (br - ar); var rg = ag + amount * (bg - ag); var rb = ab + amount * (bb - ab)
    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1)
  }

  const precision = (value, precision) => {
    return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision)
  }

  return { map, clamp, random, randomDir, lerp, lerp3, lerpedPoints, square, dist, norm, degrees, radians, randomName, timestampName, randomIndex, copyArray, shuffleArray, lerpColor, precision }

  /* ----- END ----- */
}))
