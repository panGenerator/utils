import * as geometry from '../src/modules/geometry'
describe('Geometry', () => {
  describe('lerp3()', function () {
    it('should interpolate between two points in 3D', function () {
      expect(
        geometry.lerp3({ x: 0, y: 100, z: 200 }, { x: 100, y: 50, z: 100 }, 0.5)
      ).toStrictEqual({ x: 50, y: 75, z: 150 })
    })
  })
  describe('lerpStops()', function () {
    it('should return n points between supplied points', function () {
      expect(
        geometry.lerpStops(
          { x: 0, y: 100, z: 200 },
          { x: 300, y: 400, z: 500 },
          2
        )
      ).toStrictEqual([
        { x: 100, y: 200, z: 300 },
        { x: 200, y: 300, z: 400 },
      ])
    })
  })
  describe('dist()', function () {
    it('should return 0 if the points are the same', function () {
      expect(geometry.dist({ x: 10, y: 100 }, { x: 10, y: 100 })).toBe(0)
    })
    it('should return distance between two points in 2D', function () {
      expect(geometry.dist({ x: 0, y: 100 }, { x: 100, y: 500 })).toBe(
        412.31056256176606
      )
    })
    it('should return distance between two points in 3D', function () {
      expect(
        geometry.dist({ x: 0, y: 100, z: 200 }, { x: 100, y: 500, z: 300 })
      ).toBe(424.26406871192853)
    })
  })
  describe('intersectCircles())', function () {
    it('should return false if one circle is contained in the other', function () {
      const c1 = { x: 100, y: 100, r: 50 }
      const c2 = { x: 100, y: 100, r: 60 }
      expect(geometry.intersectCircles(c1, c2)).toBe(false)
    })
    it('should return false if the circles are not intersecting', function () {
      const c1 = { x: 300, y: 100, r: 50 }
      const c2 = { x: 100, y: 100, r: 60 }
      expect(geometry.intersectCircles(c1, c2)).toBe(false)
    })
    it('should return an array of points of intersection', function () {
      const c1 = { x: 300, y: 100, r: 120 }
      const c2 = { x: 100, y: 100, r: 100 }
      expect(geometry.intersectCircles(c1, c2)).toStrictEqual([
        { x: 189, y: 54.40394753928801 },
        { x: 189, y: 145.59605246071197 },
      ])
    })
  })
  describe('intersectLines()', function () {
    it('should return false if one of the lines is a point', function () {
      expect(
        geometry.intersectLines(
          { x: 0, y: 0 },
          { x: 0, y: 0 },
          { x: 100, y: 0 },
          { x: 100, y: 100 }
        )
      ).toBe(false)
      expect(
        geometry.intersectLines(
          { x: 100, y: 0 },
          { x: 0, y: 100 },
          { x: 100, y: 100 },
          { x: 100, y: 100 }
        )
      ).toBe(false)
    })
    it("should return false if the lines don't intersect", function () {
      expect(
        geometry.intersectLines(
          { x: 0, y: 0 },
          { x: 100, y: 0 },
          { x: 0, y: 100 },
          { x: 100, y: 100 }
        )
      ).toBe(false)
    })
    it('should return false if the lines are parallel', function () {
      expect(
        geometry.intersectLines(
          { x: 0, y: 100 },
          { x: 100, y: 0 },
          { x: 100, y: 200 },
          { x: 200, y: 120 }
        )
      ).toBe(false)
    })

    it('should return a point if the lines intersect', function () {
      expect(
        geometry.intersectLines(
          { x: 100, y: 0 },
          { x: 100, y: 200 },
          { x: 0, y: 100 },
          { x: 200, y: 100 }
        )
      ).toStrictEqual({ x: 100, y: 100 })
    })
  })
  describe('polarToCartesian()', function () {
    it('should convert radius and angle to proper x and y coordinates', function () {
      expect(geometry.polarToCartesian(1, (0.0 * Math.PI) / 4.0)).toStrictEqual(
        {
          x: 1,
          y: 0,
        }
      )
      expect(geometry.polarToCartesian(1, (1.0 * Math.PI) / 4.0)).toStrictEqual(
        {
          x: 0.7071067811865476,
          y: 0.7071067811865475,
        }
      )
      expect(geometry.polarToCartesian(1, (2.0 * Math.PI) / 4.0)).toStrictEqual(
        {
          x: 6.123233995736766e-17,
          y: 1,
        }
      )
      expect(geometry.polarToCartesian(1, (3.0 * Math.PI) / 4.0)).toStrictEqual(
        {
          x: -0.7071067811865475,
          y: 0.7071067811865476,
        }
      )
      expect(geometry.polarToCartesian(1, (4.0 * Math.PI) / 4.0)).toStrictEqual(
        {
          x: -1,
          y: 1.2246467991473532e-16,
        }
      )
      expect(geometry.polarToCartesian(1, (5.0 * Math.PI) / 4.0)).toStrictEqual(
        {
          x: -0.7071067811865477,
          y: -0.7071067811865475,
        }
      )
      expect(geometry.polarToCartesian(1, (6.0 * Math.PI) / 4.0)).toStrictEqual(
        {
          x: -1.8369701987210297e-16,
          y: -1,
        }
      )
      expect(geometry.polarToCartesian(1, (7.0 * Math.PI) / 4.0)).toStrictEqual(
        {
          x: 0.7071067811865474,
          y: -0.7071067811865477,
        }
      )
      expect(geometry.polarToCartesian(1, (8.0 * Math.PI) / 4.0)).toStrictEqual(
        {
          x: 1,
          y: -2.4492935982947064e-16,
        }
      )
    })
  })
  describe('cartesianToPolar', function () {
    it('should convert x and y coordinates to proper radius and angle', function () {
      expect(geometry.cartesianToPolar({ x: 1, y: 0 })).toStrictEqual({
        r: 1,
        angle: (0.0 * Math.PI) / 4.0,
      })
      expect(
        geometry.cartesianToPolar({
          x: 0.7071067811865476,
          y: 0.7071067811865475,
        })
      ).toStrictEqual({ r: 1, angle: (1.0 * Math.PI) / 4.0 })
      expect(geometry.cartesianToPolar({ x: 0, y: 1 })).toStrictEqual({
        r: 1,
        angle: (2.0 * Math.PI) / 4.0,
      })
      expect(
        geometry.cartesianToPolar({
          x: -0.7071067811865475,
          y: 0.7071067811865476,
        })
      ).toStrictEqual({ r: 1, angle: (3.0 * Math.PI) / 4.0 })
      expect(geometry.cartesianToPolar({ x: -1, y: 0 })).toStrictEqual({
        r: 1,
        angle: (4.0 * Math.PI) / 4.0,
      })
      expect(
        geometry.cartesianToPolar({
          x: -0.7071067811865477,
          y: -0.7071067811865475,
        })
      ).toStrictEqual({ r: 1, angle: (5.0 * Math.PI) / 4.0 })
      expect(geometry.cartesianToPolar({ x: 0, y: -1 })).toStrictEqual({
        r: 1,
        angle: (6.0 * Math.PI) / 4.0,
      })
      expect(
        geometry.cartesianToPolar({
          x: 0.7071067811865474,
          y: -0.7071067811865477,
        })
      ).toStrictEqual({ r: 1, angle: (7.0 * Math.PI) / 4.0 })
      expect(geometry.cartesianToPolar({ x: 1, y: 0 })).toStrictEqual({
        r: 1,
        angle: (0.0 * Math.PI) / 4.0,
      })
    })
  })
  describe('dist2()', function () {
    it('should return 0 if the points are the same', function () {
      expect(geometry.dist2({ x: 10, y: 100 }, { x: 10, y: 100 })).toBe(0)
    })
    it('should return squared distance between two points in 2D', function () {
      expect(geometry.dist2({ x: 0, y: 100 }, { x: 100, y: 500 })).toBe(170000)
    })
    it('should return squared distance between two points in 3D', function () {
      expect(
        geometry.dist2({ x: 0, y: 100, z: 200 }, { x: 100, y: 500, z: 300 })
      ).toBe(180000)
    })
  })
  describe('distToSegment()', function () {
    it('should return 0 if the point is on segment', function () {
      expect(
        geometry.distToSegment(
          { x: 50, y: 100 },
          { x: 0, y: 100 },
          { x: 100, y: 100 }
        )
      ).toBe(0)
    })
    it('should return distance between point and segment', function () {
      expect(
        geometry.distToSegment(
          { x: 0, y: 100 },
          { x: 100, y: 500 },
          { x: 10, y: 100 }
        )
      ).toBe(10)
    })
  })
  describe('distToSegment2()', function () {
    it('should return distance to point i segment start and end are the same point', function () {
      expect(
        geometry.distToSegment2(
          { x: 50, y: 100 },
          { x: 0, y: 100 },
          { x: 0, y: 100 }
        )
      ).toBe(2500)
    })
    it('should return 0 if the point is on segment', function () {
      expect(
        geometry.distToSegment2(
          { x: 50, y: 100 },
          { x: 0, y: 100 },
          { x: 100, y: 100 }
        )
      ).toBe(0)
    })
    it('should return distance to start when point is before segment', function () {
      expect(
        geometry.distToSegment2(
          { x: 0, y: 0 },
          { x: 10, y: 0 },
          { x: 100, y: 0 }
        )
      ).toBe(100)
    })
    it('should return squared distance between point and segment', function () {
      expect(
        geometry.distToSegment2(
          { x: 0, y: 100 },
          { x: 100, y: 500 },
          { x: 10, y: 100 }
        )
      ).toBe(100)
    })
  })
})
