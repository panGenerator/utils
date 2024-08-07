import * as date from '../src/modules/dates'
describe('Dates', () => {
  describe('getQuarter()', function () {
    it('should return an array with proper year and quarter', function () {
      expect(date.getQuarter(new Date(2020, 0, 10))).toStrictEqual([2020, 1])
      expect(date.getQuarter(new Date(2019, 1, 11))).toStrictEqual([2019, 1])
      expect(date.getQuarter(new Date(2018, 2, 12))).toStrictEqual([2018, 1])
      expect(date.getQuarter(new Date(2017, 3, 13))).toStrictEqual([2017, 2])
      expect(date.getQuarter(new Date(2016, 4, 14))).toStrictEqual([2016, 2])
      expect(date.getQuarter(new Date(2015, 5, 15))).toStrictEqual([2015, 2])
      expect(date.getQuarter(new Date(2014, 6, 16))).toStrictEqual([2014, 3])
      expect(date.getQuarter(new Date(2013, 7, 17))).toStrictEqual([2013, 3])
      expect(date.getQuarter(new Date(2012, 8, 18))).toStrictEqual([2012, 3])
      expect(date.getQuarter(new Date(2011, 9, 19))).toStrictEqual([2011, 4])
      expect(date.getQuarter(new Date(2010, 10, 20))).toStrictEqual([2010, 4])
      expect(date.getQuarter(new Date(2009, 11, 21))).toStrictEqual([2009, 4])
      expect(date.getQuarter()).toStrictEqual([
        new Date().getFullYear(),
        Math.floor(new Date().getMonth() / 3) + 1,
      ])
    })
  })
  describe('quarterExtent()', function () {
    it('should return an array with proper start and end dates of quarter', function () {
      expect(date.quarterExtent(1, 2019)).toStrictEqual([
        new Date('2019-01-01'),
        new Date('2019-03-31'),
      ])
      expect(date.quarterExtent(2, 2020)).toStrictEqual([
        new Date('2020-04-01'),
        new Date('2020-06-30'),
      ])
      expect(date.quarterExtent(3, 2021)).toStrictEqual([
        new Date('2021-07-01'),
        new Date('2021-09-30'),
      ])
      expect(date.quarterExtent(4, 2022)).toStrictEqual([
        new Date('2022-10-01'),
        new Date('2022-12-31'),
      ])
    })
  })
  describe('#datesBetween', function () {
    it('should return array of dates between start and end date', function () {
      expect(
        date.datesBetween(new Date('2019-01-01'), new Date('2019-01-03'))
      ).toStrictEqual([
        new Date('2019-01-01'),
        new Date('2019-01-02'),
        new Date('2019-01-03'),
      ])
    })
    it('should return one date when start and end date are the same', function () {
      expect(
        date.datesBetween(new Date('2019-01-01'), new Date('2019-01-01'))
      ).toStrictEqual([new Date('2019-01-01')])
    })
  })
})
