import numeric2coordinate from "../src/modules/utils/numeric2coordinate"
import type { Numeric2coordinateOptions } from "../src/modules/utils/numeric2coordinate"
import { SquareType } from "../src/modules/constant";

describe("src/modules/utils/numeric2coordinate.ts", () => {

  type FixturesType = {
    options: Numeric2coordinateOptions;
    output: SquareType
  }

  const FIXTURES: FixturesType[] = [
    {
      options: {
        row: 2,
        column: 4
      },
      output: "b4"
    },
    {
      options: {
        row: 8,
        column: 8,
      },
      output: "h8"
    },
    {
      options: {
        row: 1,
        column: 1
      },
      output: "a1"
    },
    {
      options: {
        row: 5,
        column: 7
      },
      output: "e7"
    }
  ]

  FIXTURES.forEach(fixture => {

    test(`should get ${fixture.output}`, () => {

      const outputInspect = numeric2coordinate(fixture.options)

      expect(outputInspect).toBe(fixture.output)
    })

  })

})