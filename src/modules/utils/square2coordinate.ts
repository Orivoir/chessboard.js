import { DATA_ATTR_COORDINATE_SQUARE, SquareType } from "../constant";

export default function square2coordinate(square: HTMLDivElement): SquareType | never {

  const coordinate = square.getAttribute(DATA_ATTR_COORDINATE_SQUARE)

  if(!coordinate) {
    throw new TypeError(`can't get coordinate value for square`)
  }

  return (coordinate as SquareType)
}