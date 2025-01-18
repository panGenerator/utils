import * as random from '../src/modules/random'
describe('Random', () => {
  describe('random()', function () {
    it('should generate random number from provided range', function () {
      const min = 5
      const max = 10
      const r = random.random(min, max)
      expect(r >= min && r < max).toBe(true)
    })
    it('should generate random number from 0 to provided max', function () {
      const max = 10
      const r = random.random(max)
      expect(r >= 0 && r < max).toBe(true)
    })
  })
  describe('randomDir()', function () {
    it('should generate random direction as a number', function () {
      const r = random.randomDir()
      expect(Math.abs(r)).toBe(1)
      expect(typeof r).toBe('number')
    })
    it('should generate random direction with absolute value of 1', function () {
      const r = random.randomDir()
      expect(Math.abs(r)).toBe(1)
    })
    it('should generate random direction as -1 or 1', function () {
      const r = random.randomDir()
      expect([-1, 1].includes(r)).toBe(true)
    })
  })
  describe('randomName()', function () {
    it('should return string', function () {
      expect(typeof random.randomName(3)).toBe('string')
    })
    it('should return string with provided length', function () {
      const length = 8
      const name = random.randomName(length)
      expect(name.length).toBe(length)
    })
  })
  describe('randomIndex()', function () {
    it('should return a random number between 0 and N', function () {
      const r = random.randomIndex(10)
      expect(r >= 0 && r < 10).toBe(true)
    })
    it('should return an integer', function () {
      const r = random.randomIndex(5)
      expect(r % 1).toBe(0)
    })
  })
})
