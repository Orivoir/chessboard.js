import type {SquareType} from "./../constant"

export interface Numeric2coordinateOptions {
  row: number;
  column: number;
}

export default function numeric2coordinate({row, column}: Numeric2coordinateOptions): SquareType {

  const rowAlphaList = "abcdefgh".split("")
  
  const rowAlpha = rowAlphaList[row - 1]

  const coordinate: SquareType = (`${rowAlpha}${column}` as SquareType)

  return coordinate
}