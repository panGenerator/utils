// import { map, clamp, random, randomDir, lerp, lerp3, lerpedPoints, dist, square, norm, degrees, radians, randomName, timestampName, randomIndex, shuffleArray, lerpColor, precision } from '../utils.js'
const { map, clamp, random, randomDir, lerp, lerp3 } = require('../utils')
const assert = require('assert')

describe('Utils', function () {
  describe('#map()', function () {
    it('should map the value from source range to provided range', function () {
      assert.equal(map(0.5, 0, 1, 0, 100), 50)
      assert.equal(map(0.1, 0, 1, 0, 100), 10)
    })
  })

  describe('#clamp()', function () {
    it('should clamp the value to provided range', function () {
      assert.equal(clamp(0, 1, 10), 1)
      assert.equal(clamp(100, 1, 10), 10)
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
})
