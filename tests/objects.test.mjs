import * as objects from '../src/modules/objects'
describe('Objects', () => {
  describe('shallowCopyExcluding()', function () {
    it('should return a copy of object without specified property', function () {
      expect(
        objects.shallowCopyExcluding({ a: 'one', b: 'two' }, 'a')
      ).toStrictEqual({
        b: 'two',
      })
    })
  })
})
