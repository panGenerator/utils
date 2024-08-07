import * as arrays from '../src/modules/arrays'
describe('Arrays', () => {
  describe('copyArray()', function () {
    it('should return copy of the array ', function () {
      expect(arrays.copyArray([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
    })
  })
  describe('shuffleArray()', function () {
    it('should return an array with the same length', function () {
      expect(arrays.shuffleArray([1, 2, 3]).length).toBe(3)
    })
  })
  describe('filterUnique()', function () {
    it('should return an array type', function () {
      expect(arrays.filterUnique([1, 2, 3]).constructor).toBe(Array)
    })
    it('should return the source array when no duplicates are present', function () {
      expect(arrays.filterUnique([1, 2, 3])).toStrictEqual([1, 2, 3])
    })
    it('should return an array with unique elements only', function () {
      expect(arrays.filterUnique([1, 2, 3, 3, 2, 1, 2])).toStrictEqual([
        1, 2, 3,
      ])
    })
  })
  describe('fuzzzySearch()', function () {
    it('should find elements matching search value', function () {
      const list = [
        'Mickiewicz',
        'Słowacki',
        'Lechoń',
        'Wierzyński',
        'Krasiński',
        'Tuwim',
        'Sienkiewicz',
      ]
      expect(arrays.fuzzySearch(list, 's')).toStrictEqual([
        'Słowacki',
        'Wierzyński',
        'Krasiński',
        'Sienkiewicz',
      ])
      expect(arrays.fuzzySearch(list, 'sie')).toStrictEqual(['Sienkiewicz'])
      expect(arrays.fuzzySearch(list, 'wu')).toStrictEqual([])
      expect(arrays.fuzzySearch(list, 'lEcHoŃ')).toStrictEqual(['Lechoń'])
      expect(arrays.fuzzySearch(list, 'ski')).toStrictEqual([
        'Słowacki',
        'Wierzyński',
        'Krasiński',
        'Sienkiewicz',
      ])
      expect(arrays.fuzzySearch(list, 'icz')).toStrictEqual([
        'Mickiewicz',
        'Sienkiewicz',
      ])
    })
  })
  describe('contains()', function () {
    it('return false if array does not contain element', function () {
      expect(arrays.contains(4, [1, 2, 3])).toBe(false)
    })
    it('return true if array contains element', function () {
      expect(arrays.contains(2, [1, 2, 3])).toBe(true)
    })
  })
})
