import extractSquares from "../src/modules/utils/extract-squares"
import board from "../src/modules/build-skeleton/board"
import {DATA_ATTR_COORDINATE_SQUARE} from "../src/modules/constant"

describe("src/modules/utils/extract-squares.ts", () => {

  const chessboard = board()

  const squares = extractSquares(chessboard)

  squares.forEach((row, index) => {

    test(`should have 8 valid squares for row ${index + 1}`, () => {

      expect(row.length).toBe(8)

      for(const square of row) {

        const coordinate = square.getAttribute(DATA_ATTR_COORDINATE_SQUARE)

        expect(typeof coordinate).toBe("string")

        expect(coordinate).toMatch(/^(a|b|c|d|e|f|g|h)(1|2|3|4|5|6|7|8)$/)
      }
    })
  })


})