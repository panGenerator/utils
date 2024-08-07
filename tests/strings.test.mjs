import * as strings from '../src/modules/strings'
describe('Strings', () => {
  describe('timestampName()', function () {
    it('should return string', function () {
      expect(typeof strings.timestampName()).toBe('string')
    })
    it('should return 19 characters', function () {
      const name = strings.timestampName()
      expect(name.length).toBe(19)
    })
  })
  describe('removeDiacritics()', function () {
    it('should return a string without diacritics', function () {
      expect(strings.removeDiacritics('ĄĆĘŁŃÓŚŹŻąćęłńóśźż')).toBe(
        'ACELNOSZZacelnoszz'
      )
    })
  })
  describe('removeNonAlphaNumeric()', function () {
    it('should return a string without any alpha numeric characters', function () {
      expect(
        strings.removeNonAlphaNumeric(
          'a!b@c#d$e%f^g&h*i(j)k_l-m=n+1234567890 ,.<>/?\'|"\\[]{}~`£§'
        )
      ).toBe('abcdefghijklmn1234567890')
    })
  })

  describe('splitChunks()', function () {
    it('should return an array of chunks', function () {
      expect(strings.splitChunks('1234567890', 4)).toStrictEqual([
        '1234',
        '5678',
        '90',
      ])
    })
    it('should return an array of chunks of length N', function () {
      expect(strings.splitChunks('1234567890', 4, true)).toStrictEqual([
        '1234',
        '5678',
      ])
    })
  })
  describe('sepCase()', function () {
    it("should return a camel cased string as custom case with - as a separater when you don't provide a separator", function () {
      expect(strings.sepCase('SomeCamelString')).toBe('some-camel-string')
    })

    it('should return a camel cased string as custom case', function () {
      expect(strings.sepCase('SomeCamelString', '*')).toBe('some*camel*string')
    })
    it('should return a kebab cased string as custom case', function () {
      expect(strings.sepCase('some-kebab-string', '|')).toBe(
        'some|kebab|string'
      )
    })
    it('should return string with polish diacritics as custom case', function () {
      expect(strings.sepCase('zażółć gęślą jaźń', '$')).toBe(
        'zazolc$gesla$jazn'
      )
    })
  })
  describe('snakeCase()', function () {
    it('should return a camel cased string as snake case', function () {
      expect(strings.snakeCase('SomeCamelString')).toBe('some_camel_string')
    })
    it('should return a kebab cased string as snake case', function () {
      expect(strings.snakeCase('some-kebab-string')).toBe('some_kebab_string')
    })
    it('should return string with polish diacritics as snake case', function () {
      expect(strings.snakeCase('zażółć gęślą jaźń')).toBe('zazolc_gesla_jazn')
    })
  })
  describe('kebabCase()', function () {
    it('should return a camel cased string as kebab case', function () {
      expect(strings.kebabCase('SomeCamelString')).toBe('some-camel-string')
    })
    it('should return a snake cased string as kebab case', function () {
      expect(strings.kebabCase('some_snake_string')).toBe('some-snake-string')
    })
    it('should return string with polish diacritics as kebab case', function () {
      expect(strings.kebabCase('zażółć gęślą jaźń')).toBe('zazolc-gesla-jazn')
    })
  })
  describe('camelCase()', function () {
    it('should return a camel cased string as camel case', function () {
      expect(strings.camelCase('some-kebab-string')).toBe('someKebabString')
    })
    it('should return a snake cased string as camel case', function () {
      expect(strings.camelCase('some_snake_string')).toBe('someSnakeString')
    })
    it('should return string with polish diacritics as camel case', function () {
      expect(strings.camelCase('zażółć gęślą jaźń')).toBe('zazolcGeslaJazn')
    })
  })
})
