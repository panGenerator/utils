/**
 * Geometry functions
 */

import { lerp, square } from './maths'
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
 * Linear interpolation in 3D
 * @param {Point} A - First point
 * @param {Point} B - Second point
 * @param {Number} amt - amount to interpolate
 * @returns {Point} Interpolated point
 */
export const lerp3 = (A, B, amt) => {
  return {
    x: lerp(A.x, B.x, amt),
    y: lerp(A.y, B.y, amt),
    z: lerp(A.z, B.z, amt),
  }
}

/**
 * Linear interpolation in 3D array
 * @param {Point} A - First point
 * @param {Point} B - Second point
 * @param {Number} count - Point count
 * @returns {Point[]} Interpolated points
 */
export const lerpStops = (A, B, count) => {
  const points = []
  const step = 1 / (count + 1)
  for (let i = 0; i < count; i++) {
    points.push(lerp3(A, B, step + step * i))
  }
  return points
}

/**
 * Distance between two points (2D and 3D)
 * @param {Point} A - First point
 * @param {Point} B - Second point
 * @returns {Number} distance between the points
 */
export const dist = (A, B) => {
  return Math.sqrt(dist2(A, B))
}

/**
 * Find intersection point between two lines
 * @param {Point} p1 - first point of first line
 * @param {Point} p2 - second point of first line
 * @param {Point} p3 - first point of second line
 * @param {Point} p4 - second point of second line
 * @returns {(Point|Boolean)} intersection or false (if no intersection)
 */
export const intersectLines = (p1, p2, p3, p4) => {
  if ((p1.x === p2.x && p1.y === p2.y) || (p3.x === p4.x && p3.y === p4.y)) {
    return false
  }
  const denominator =
    (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y)
  if (denominator === 0) {
    return false
  }
  let ua =
    ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) /
    denominator
  let ub =
    ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) /
    denominator
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
    return false
  }
  let x = p1.x + ua * (p2.x - p1.x)
  let y = p1.y + ua * (p2.y - p1.y)
  return { x, y }
}

/**
 * Find intersection points between two circles
 * @param {Circle} c1 - first circle
 * @param {Circle} c2 - second circle
 * @returns {(Array|Boolean)} intersection or false (if no intersection)
 */
export const intersectCircles = (c1, c2) => {
  const dx = c2.x - c1.x
  const dy = c2.y - c1.y
  const d = Math.sqrt(dy * dy + dx * dx)

  if (d > c1.r + c2.r) {
    return false
  }
  if (d < Math.abs(c1.r - c2.r)) {
    return false
  }
  const a = (c1.r * c1.r - c2.r * c2.r + d * d) / (2.0 * d)

  const xc = c1.x + (dx * a) / d
  const yc = c1.y + (dy * a) / d

  const h = Math.sqrt(c1.r * c1.r - a * a)

  const rx = -dy * (h / d)
  const ry = dx * (h / d)

  return [
    { x: xc + rx, y: yc + ry },
    { x: xc - rx, y: yc - ry },
  ]
}

/**
 * Convert coordinates from polar to cartesian
 * @param {Number} r - radius
 * @param {Number} angle - angle
 * @returns {Point} cartesian coordinates
 */
export const polarToCartesian = (r, angle) => {
  return {
    x: r * Math.cos(angle),
    y: r * Math.sin(angle),
  }
}

/**
 * Convert coordinates from cartesian to polar
 * @param {Point} P - cartesian coordinates
 * @returns {Object} polar coordinates
 */
export const cartesianToPolar = (P) => {
  let angle = Math.atan2(P.y, P.x)
  if (angle < 0) {
    while (angle < 0) {
      angle += Math.PI * 2.0
    }
  }
  // if (angle >= Math.PI * 2.0) {
  //   while (angle >= Math.PI) {
  //     angle -= Math.PI * 2.0
  //   }
  // }
  return {
    r: Math.sqrt(P.x * P.x + P.y * P.y),
    angle,
  }
}

/**
 * Distance between two points (2D and 3D) squared
 * @param {Point} A - First point
 * @param {Point} B - Second point
 * @returns {Number} squared distance between the points
 */
export const dist2 = (A, B) => {
  return (
    square(B.x - A.x) +
    square(B.y - A.y) +
    (A.z !== undefined && B.z !== undefined ? square(B.z - A.z) : 0)
  )
}

/**
 * Distance between point and segment squared
 * @param {Point} A - First point
 * @param {Point} S - Segment start
 * @param {Point} E - Segment end
 * @returns {Number} squared distance between the point and the segment
 */
export const distToSegment2 = (A, S, E) => {
  const l2 = dist2(S, E)

  if (l2 === 0) return dist2(A, S)

  const t = ((A.x - S.x) * (E.x - S.x) + (A.y - S.y) * (E.y - S.y)) / l2

  if (t < 0) return dist2(A, S)
  if (t > 1) return dist2(A, E)

  return dist2(A, { x: S.x + t * (E.x - S.x), y: S.y + t * (E.y - S.y) })
}

/**
 * Distance between point and segment
 * @param {Point} A - First point
 * @param {Point} S - Segment start
 * @param {Point} E - Segment end
 * @returns {Number} distance between the point and the segment
 */
export const distToSegment = (A, S, E) => {
  return Math.sqrt(distToSegment2(A, S, E))
}
