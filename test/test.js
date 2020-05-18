// import { map, clamp, random, randomDir, lerp, lerp3, lerpedPoints, dist, square, norm, degrees, radians, randomName, timestampName, randomIndex, shuffleArray, lerpColor, precision } from '../utils.js'
const { map, clamp, random, randomDir, lerp, lerp3, lerpedPoints, square, dist, norm, degrees, radians, randomName, timestampName, randomIndex, shuffleArray, lerpColor, precision } = require('../utils')
const assert = require('assert')

describe('Utils', function () {
  describe('#map()', function () {
    it('should map the value from source range to provided range', function () {
      assert.equal(map(0.5, 0, 2, 100, 200), 125)
    })
  })

  describe('#clamp()', function () {
    it('should return min if number lower than range', function () {
      assert.equal(clamp(0, 1, 10), 1)
    })
    it('should return max if number higher than range', function () {
      assert.equal(clamp(100, 1, 10), 10)
    })
    it('should return the number if in range', function () {
      assert.equal(clamp(5, 1, 10), 5)
    })
  })

  describe('#random()', function () {
    it('should generate random number from provided range', function () {
      const min = 5
      const max = 10
      const r = random(min, max)
      assert(r >= min && r < max)
    })
    it('should generate random number from 0 to provided max', function () {
      const max = 10
      const r = random(max)
      assert(r >= 0 && r < max)
    })
  })
  describe('#randomDir()', function () {
    it('should generate random direction', function () {
      const r = randomDir()
      assert(r === -1 || r === 1)
    })
  })

  describe('#lerp()', function () {
    it('should interpolate beetween two numbers', function () {
      assert.equal(lerp(0, 100, 0.5), 50)
    })
  })
  describe('#lerp3()', function () {
    it('should interpolate beetween two points in 3D', function () {
      assert.deepEqual(lerp3({ x: 0, y: 100, z: 200 }, { x: 100, y: 50, z: 100 }, 0.5), { x: 50, y: 75, z: 150 })
    })
  })
  describe('#lerpedPoints()', function () {
    it('should return n points between supplied points', function () {
      assert.deepEqual(lerpedPoints({ x: 0, y: 100, z: 200 }, { x: 300, y: 400, z: 500 }, 2), [{ x: 100, y: 200, z: 300 }, { x: 200, y: 300, z: 400 }])
    })
  })
  describe('#square()', function () {
    it('should return provided number squared', function () {
      assert.equal(square(2), 4)
    })
  })
  describe('#dist()', function () {
    it('should return 0 if the points are the same', function () {
      assert.equal(dist({ x: 10, y: 100 }, { x: 10, y: 100 }), 0)
    })
    it('should return distance beetween two points in 2D', function () {
      assert.equal(dist({ x: 0, y: 100 }, { x: 100, y: 500 }), 412.31056256176606)
    })
    it('should return distance beetween two points in 3D', function () {
      assert.equal(dist({ x: 0, y: 100, z: 200 }, { x: 100, y: 500, z: 300 }), 424.26406871192853)
    })
  })
  describe('#norm()', function () {
    it('should return 0 when number equals min', function () {
      assert.equal(norm(2, 2, 10), 0)
    })
    it('should return 1 when number equals max', function () {
      assert.equal(norm(10, 2, 10), 1)
    })
    it('should return normalized number from provided range', function () {
      assert.equal(norm(5, 0, 10), 0.5)
    })
  })
  describe('#degrees()', function () {
    it('should return angle in degrees', function () {
      assert.equal(degrees(Math.PI / 2.0), 90)
    })
  })
  describe('#radians()', function () {
    it('should return angle in radians', function () {
      assert.equal(radians(180), Math.PI)
    })
  })
  describe('#randomName()', function () {
    it('should return string', function () {
      const length = 8
      const name = randomName(length)
      assert.equal(typeof (name), 'string')
    })
    it('should return string with provided length', function () {
      const length = 8
      const name = randomName(length)
      assert.equal(name.length, length)
    })
  })
})
