import { map, clamp, random, randomDir, lerp, lerp3, lerpedPoints, dist, square, norm, degrees, radians, randomName, timestampName, randomIndex, shuffleArray, lerpColor, precision } from '../utils.js'
import assert from 'assert';

describe('Utils', function() {

  describe('#map()', function() {
    it('should map the value from source range to provided range', function() {
      assert.equal(map(0.5, 0, 1, 0, 100), 50);
      assert.equal(map(0.1, 0, 1, 0, 100), 10);
    });
  });

  describe('#clamp()', function() {
    it('should clamp the value to provided range', function() {
      assert.equal(clamp(0, 1, 10), 1);
      assert.equal(clamp(100, 1, 10), 10);
      assert.equal(clamp(5, 1, 10), 5);
    });
  });

  describe('#random()', function() {
    it('should generate random number from provided range', function() {
      let min = 5
      let max = 10
      let r = random(min, max)
      assert(r >= min && r < max);
      r = random(max)
      assert(r >= 0 && r < max);
    });
  });

});