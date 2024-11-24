import board from "./../src/modules/build-skeleton/board"
import fetchSquareFromCoordinate from "./../src/modules/utils/fetch-square-from-coordinate"
import type { SquareType } from "../src/modules/constant"
import { DATA_ATTR_COORDINATE_SQUARE } from "../src/modules/constant"

describe("src/modules/utils/fetch-square-from-coordinate.ts", () => {

  const chessboard = board()

  const FIXTURES: SquareType[] = [
    "a1",
    "a4",
    "f3",
    "d5",
    "g4",
    "h7",
    "c6",
    "h8"
  ]

  FIXTURES.forEach(coordinate => {

    test(`should fetch square ${coordinate}`, () => {
      const square = fetchSquareFromCoordinate(chessboard, coordinate)
  
      expect(square).toBeInstanceOf(HTMLDivElement)
  
      const coordinateFromAttr = square?.getAttribute(DATA_ATTR_COORDINATE_SQUARE)
  
      expect(coordinateFromAttr).toBe(coordinate)
    })
  })
})