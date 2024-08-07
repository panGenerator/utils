import * as colors from '../src/modules/colors'
describe('Colors', () => {
  describe('lerpColor()', function () {
    it('should return lerped color', function () {
      expect(colors.lerpColor('#ff0000', '#00ff00', 0.4)).toBe('#996600')
    })
    it('should return a string', function () {
      expect(typeof colors.lerpColor('#ff0000', '#00ff00', 0.9)).toBe('string')
    })
    it('should return hex color', function () {
      expect(colors.lerpColor('#ff0000', '#00ffff', 0.4).length).toBe(7)
      expect(colors.lerpColor('#ff0000', '#ffff00', 0.4).charAt(0)).toBe('#')
    })
  })
})
