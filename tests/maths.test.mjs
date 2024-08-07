import * as maths from '../src/modules/maths'
describe('Maths', () => {
  describe('map()', () => {
    it('should map the value from source range to provided range', () => {
      expect(maths.map(0.5, 0, 2, 100, 200)).toBe(125)
    })
  })
  describe('clamp()', function () {
    it('should return min if number lower than range', function () {
      expect(maths.clamp(0, 1, 10)).toBe(1)
    })

    it('should return max if number higher than range', function () {
      expect(maths.clamp(100, 1, 10)).toBe(10)
    })

    it('should return the number if in range', function () {
      expect(maths.clamp(5, 1, 10)).toBe(5)
    })
  })
  describe('norm()', function () {
    it('should return 0 when number equals min', function () {
      expect(maths.norm(2, 2, 10)).toBe(0)
    })

    it('should return 1 when number equals max', function () {
      expect(maths.norm(10, 2, 10)).toBe(1)
    })

    it('should return normalized number from provided range', function () {
      expect(maths.norm(5, 0, 10)).toBe(0.5)
    })
  })
  describe('lerp()', function () {
    it('should interpolate between two numbers', function () {
      expect(maths.lerp(0, 100, 0.5)).toBe(50)
    })
  })
  describe('square()', function () {
    it('should return provided number squared', function () {
      expect(maths.square(2)).toBe(4)
    })
  })
  describe('degrees()', function () {
    it('should return angle in degrees', function () {
      expect(maths.degrees(Math.PI / 2.0)).toBe(90)
    })
  })
  describe('radians()', function () {
    it('should return angle in radians', function () {
      expect(maths.radians(180)).toBe(Math.PI)
    })
  })
  describe('precision()', function () {
    it('should return a number with specified digits after decimal point', function () {
      expect(maths.precision(10.13432234324324, 2)).toBe(10.13)
    })
  })
})
