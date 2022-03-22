const { map, clamp, random, randomDir, lerp, lerp3, lerpedPoints, square, dist, norm, degrees, radians, intersection, randomName, timestampName, randomIndex, copyArray, shuffleArray, filterUnique, lerpColor, precision, removeDiacritics, removeNonAlphaNumeric, splitChunks, getQuarter, quarterExtent, polarToCartesian, cartesianToPolar, fuzzySearch, dist2, distToSegment2, distToSegment, sepCase, snakeCase, kebabCase, camelCase } = require('../utils')
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
  describe('#intersection()', function () {
    it('should return false if one circle is contained in the other', function () {
      const c1 = { x: 100, y: 100, r: 50 }
      const c2 = { x: 100, y: 100, r: 60 }
      assert.equal(intersection(c1, c2), false)
    })
    it('should return false if the circles are not intersecting', function () {
      const c1 = { x: 300, y: 100, r: 50 }
      const c2 = { x: 100, y: 100, r: 60 }
      assert.equal(intersection(c1, c2), false)
    })
    it('should return an array of points of intersection', function () {
      const c1 = { x: 300, y: 100, r: 120 }
      const c2 = { x: 100, y: 100, r: 100 }
      assert.deepEqual(intersection(c1, c2), [{ x: 189, y: 54.40394753928801 }, { x: 189, y: 145.59605246071197 }])
    })
  })
  describe('#randomName()', function () {
    it('should return string', function () {
      assert.equal(typeof (randomName(3)), 'string')
    })
    it('should return string with provided length', function () {
      const length = 8
      const name = randomName(length)
      assert.equal(name.length, length)
    })
  })
  describe('#timestampName()', function () {
    it('should return string', function () {
      assert.equal(typeof (timestampName()), 'string')
    })
    it('should return 19 characters', function () {
      const name = timestampName()
      assert.equal(name.length, 19)
    })
  })
  describe('#randomIndex()', function () {
    it('should return a random number between 0 and N', function () {
      const r = randomIndex(10)
      assert(r >= 0 && r < 10)
    })
    it('should return an integer', function () {
      const r = randomIndex(5)
      assert.equal(r % 1, 0)
    })
  })
  describe('#copyArray()', function () {
    it('should return copy of the array ', function () {
      assert.deepEqual(copyArray([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
    })
  })
  describe('#shuffleArray()', function () {
    it('should return an array with the same length', function () {
      assert.equal(shuffleArray([1, 2, 3]).length, 3)
    })
  })
  describe('#filterUnique()', function () {
    it('should return an array type', function () {
      assert.equal(filterUnique([1, 2, 3]).constructor, Array)
    })
    it('should return the source array when no duplicates are present', function () {
      assert.deepEqual(filterUnique([1, 2, 3]), [1, 2, 3])
    })
    it('should return an array with unique elements only', function () {
      assert.deepEqual(filterUnique([1, 2, 3, 3, 2, 1, 2]), [1, 2, 3])
    })
  })
  describe('#lerpColor()', function () {
    it('should return lerped color', function () {
      assert.equal(lerpColor('#ff0000', '#00ff00', 0.4), '#996600')
    })
    it('should return a string', function () {
      assert.equal(typeof (lerpColor('#ff0000', '#00ff00', 0.9)), 'string')
    })
    it('should return hex color', function () {
      assert.equal(lerpColor('#ff0000', '#00ffff', 0.4).length, 7)
      assert.equal(lerpColor('#ff0000', '#ffff00', 0.4).charAt(0), '#')
    })
  })
  describe('#precision', function () {
    it('should return a number with specified digits after decimal point', function () {
      assert.equal(precision(10.13432234324324, 2), 10.13)
    })
  })
  describe('#removeDiacritics', function () {
    it('should return a string without diacritics', function () {
      assert.equal(removeDiacritics('ĄĆĘŁŃÓŚŹŻąćęłńóśźż'), 'ACELNOSZZacelnoszz')
    })
  })

  describe('#removeNonAlphaNumeric', function () {
    it('should return a string without any alpha numeric characters', function () {
      assert.equal(removeNonAlphaNumeric('a!b@c#d$e%f^g&h*i(j)k_l-m=n+1234567890 ,.<>/?\'|"\\[]{}~`£§'), 'abcdefghijklmn1234567890')
    })
  })

  describe('#splitChunks', function () {
    it('should return an array of chunks', function () {
      assert.deepEqual(splitChunks('1234567890', 4), ['1234', '5678', '90'])
    })
    it('should return an array of chunks of length N', function () {
      assert.deepEqual(splitChunks('1234567890', 4, true), ['1234', '5678'])
    })
  })
  describe('#getQuarter', function () {
    it('should return an array with proper year and quarter', function () {
      assert.deepEqual(getQuarter(new Date(2020, 0, 10)), [2020, 1])
      assert.deepEqual(getQuarter(new Date(2019, 1, 11)), [2019, 1])
      assert.deepEqual(getQuarter(new Date(2018, 2, 12)), [2018, 1])
      assert.deepEqual(getQuarter(new Date(2017, 3, 13)), [2017, 2])
      assert.deepEqual(getQuarter(new Date(2016, 4, 14)), [2016, 2])
      assert.deepEqual(getQuarter(new Date(2015, 5, 15)), [2015, 2])
      assert.deepEqual(getQuarter(new Date(2014, 6, 16)), [2014, 3])
      assert.deepEqual(getQuarter(new Date(2013, 7, 17)), [2013, 3])
      assert.deepEqual(getQuarter(new Date(2012, 8, 18)), [2012, 3])
      assert.deepEqual(getQuarter(new Date(2011, 9, 19)), [2011, 4])
      assert.deepEqual(getQuarter(new Date(2010, 10, 20)), [2010, 4])
      assert.deepEqual(getQuarter(new Date(2009, 11, 21)), [2009, 4])
    })
  })

  describe('#quarterExtent', function () {
    it('should return an array with proper start and end dates of quarter', function () {
      assert.deepEqual(quarterExtent(1, 2019), [new Date('2019-01-01'), new Date('2019-03-31')])
      assert.deepEqual(quarterExtent(2, 2020), [new Date('2020-04-01'), new Date('2020-06-30')])
      assert.deepEqual(quarterExtent(3, 2021), [new Date('2021-07-01'), new Date('2021-09-30')])
      assert.deepEqual(quarterExtent(4, 2022), [new Date('2022-10-01'), new Date('2022-12-31')])
    })
  })

  describe('#polarToCartesian', function () {
    it('should convert radius and angle to proper x and y coordinates', function () {
      assert.deepEqual(polarToCartesian(1, 0.0 * Math.PI / 4.0), { x: 1, y: 0 })
      assert.deepEqual(polarToCartesian(1, 1.0 * Math.PI / 4.0), { x: 0.7071067811865476, y: 0.7071067811865475 })
      assert.deepEqual(polarToCartesian(1, 2.0 * Math.PI / 4.0), { x: 6.123233995736766e-17, y: 1 })
      assert.deepEqual(polarToCartesian(1, 3.0 * Math.PI / 4.0), { x: -0.7071067811865475, y: 0.7071067811865476 })
      assert.deepEqual(polarToCartesian(1, 4.0 * Math.PI / 4.0), { x: -1, y: 1.2246467991473532e-16 })
      assert.deepEqual(polarToCartesian(1, 5.0 * Math.PI / 4.0), { x: -0.7071067811865477, y: -0.7071067811865475 })
      assert.deepEqual(polarToCartesian(1, 6.0 * Math.PI / 4.0), { x: -1.8369701987210297e-16, y: -1 })
      assert.deepEqual(polarToCartesian(1, 7.0 * Math.PI / 4.0), { x: 0.7071067811865474, y: -0.7071067811865477 })
      assert.deepEqual(polarToCartesian(1, 8.0 * Math.PI / 4.0), { x: 1, y: -2.4492935982947064e-16 })
    })
  })
  describe('#cartesianToPolar', function () {
    it('should convert x and y coordinates to proper radius and angle', function () {
      assert.deepEqual(cartesianToPolar(1, 0), { r: 1, angle: 0.0 * Math.PI / 4.0 })
      assert.deepEqual(cartesianToPolar(0.7071067811865476, 0.7071067811865475), { r: 1, angle: 1.0 * Math.PI / 4.0 })
      assert.deepEqual(cartesianToPolar(0, 1), { r: 1, angle: 2.0 * Math.PI / 4.0 })
      assert.deepEqual(cartesianToPolar(-0.7071067811865475, 0.7071067811865476), { r: 1, angle: 3.0 * Math.PI / 4.0 })
      assert.deepEqual(cartesianToPolar(-1, 0), { r: 1, angle: 4.0 * Math.PI / 4.0 })
      assert.deepEqual(cartesianToPolar(-0.7071067811865477, -0.7071067811865475), { r: 1, angle: 5.0 * Math.PI / 4.0 })
      assert.deepEqual(cartesianToPolar(0, -1), { r: 1, angle: 6.0 * Math.PI / 4.0 })
      assert.deepEqual(cartesianToPolar(0.7071067811865474, -0.7071067811865477), { r: 1, angle: 7.0 * Math.PI / 4.0 })
      assert.deepEqual(cartesianToPolar(1, 0), { r: 1, angle: 0.0 * Math.PI / 4.0 })
    })
  })
  describe('#fuzzzySearch', function () {
    it('should find elements matching search value', function () {
      const list = ['Mickiewicz', 'Słowacki', 'Lechoń', 'Wierzyński', 'Krasiński', 'Tuwim', 'Sienkiewicz']
      assert.deepEqual(fuzzySearch(list, 's'), ['Słowacki', 'Wierzyński', 'Krasiński', 'Sienkiewicz'])
      assert.deepEqual(fuzzySearch(list, 'sie'), ['Sienkiewicz'])
      assert.deepEqual(fuzzySearch(list, 'wu'), [])
      assert.deepEqual(fuzzySearch(list, 'lEcHoŃ'), ['Lechoń'])
      assert.deepEqual(fuzzySearch(list, 'ski'), ['Słowacki', 'Wierzyński', 'Krasiński', 'Sienkiewicz'])
      assert.deepEqual(fuzzySearch(list, 'icz'), ['Mickiewicz', 'Sienkiewicz'])
    })
  })

  describe('#dist2()', function () {
    it('should return 0 if the points are the same', function () {
      assert.equal(dist2({ x: 10, y: 100 }, { x: 10, y: 100 }), 0)
    })
    it('should return squared distance beetween two points in 2D', function () {
      assert.equal(dist2({ x: 0, y: 100 }, { x: 100, y: 500 }), 170000)
    })
    it('should return squared distance beetween two points in 3D', function () {
      assert.equal(dist2({ x: 0, y: 100, z: 200 }, { x: 100, y: 500, z: 300 }), 180000)
    })
  })

  describe('#distToSegment()', function () {
    it('should return 0 if the point is on segment', function () {
      assert.equal(distToSegment({ x: 50, y: 100 }, { x: 0, y: 100 }, { x: 100, y: 100 }), 0)
    })
    it('should return distance beetween point and segment', function () {
      assert.equal(distToSegment({ x: 0, y: 100 }, { x: 100, y: 500 }, { x: 10, y: 100 }), 10)
    })
  })

  describe('#distToSegment2()', function () {
    it('should return 0 if the point is on segment', function () {
      assert.equal(distToSegment2({ x: 50, y: 100 }, { x: 0, y: 100 }, { x: 100, y: 100 }), 0)
    })
    it('should return squared distance beetween point and segment', function () {
      assert.equal(distToSegment2({ x: 0, y: 100 }, { x: 100, y: 500 }, { x: 10, y: 100 }), 100)
    })
  })

  describe('#sepCase()', function () {
    it('should return a camel cased string as custom case', function () {
      assert.equal(sepCase('SomeCamelString', '*'), 'some*camel*string')
    })
    it('should return a kebab cased string as custom case', function () {
      assert.equal(sepCase('some-kebab-string', '|'), 'some|kebab|string')
    })
    it('should return string with polish diacritics as custom case', function () {
      assert.equal(sepCase('zażółć gęślą jaźń', '$'), 'zazolc$gesla$jazn')
    })
  })

  describe('#snakeCase()', function () {
    it('should return a camel cased string as snake case', function () {
      assert.equal(snakeCase('SomeCamelString'), 'some_camel_string')
    })
    it('should return a kebab cased string as snake case', function () {
      assert.equal(snakeCase('some-kebab-string'), 'some_kebab_string')
    })
    it('should return string with polish diacritics as snake case', function () {
      assert.equal(snakeCase('zażółć gęślą jaźń'), 'zazolc_gesla_jazn')
    })
  })

  describe('#kebabCase()', function () {
    it('should return a camel cased string as kebab case', function () {
      assert.equal(kebabCase('SomeCamelString'), 'some-camel-string')
    })
    it('should return a snake cased string as kebab case', function () {
      assert.equal(kebabCase('some_snake_string'), 'some-snake-string')
    })
    it('should return string with polish diacritics as kebab case', function () {
      assert.equal(kebabCase('zażółć gęślą jaźń'), 'zazolc-gesla-jazn')
    })
  })

  describe('#camelCase()', function () {
    it('should return a camel cased string as camel case', function () {
      assert.equal(camelCase('some-kebab-string'), 'someKebabString')
    })
    it('should return a snake cased string as camel case', function () {
      assert.equal(camelCase('some_snake_string'), 'someSnakeString')
    })
    it('should return string with polish diacritics as camel case', function () {
      assert.equal(camelCase('zażółć gęślą jaźń'), 'zazolcGeslaJazn')
    })
  })
})
