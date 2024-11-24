import type { SquareType, RowType } from "../constant";
import {
  DATA_ATTR_COORDINATE_SQUARE,
  MAPPING_ROW_ALPHA_NUMERIC
} from "../constant"
import extractSquare from "./extract-squares";

export default function fetchSquareFromCoordinate(root: HTMLDivElement, coordinate: SquareType) {

  const rows = extractSquare(root)

  const [rowValueAlpha, columnValue] = coordinate.split("")

  const rowValueNumeric = MAPPING_ROW_ALPHA_NUMERIC[(rowValueAlpha as RowType)]

  const row = rows[(rowValueNumeric - 1)]

  const square = row.item((columnValue as unknown as number) - 1)

  // square not find for this coordinate
  return square
} 