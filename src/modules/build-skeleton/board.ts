import {
  ID_ROOT_CHESSBOARD_DEFAULT,
  DATA_ATTR_ROW_CHESSBOARD,
  DATA_ATTR_COLUMN_CHESSBOARD,
  DATA_ATTR_COORDINATE_SQUARE,
  SQUARE_CLASSNAME
} from "./../constant"

import numeric2coordinate from "../utils/numeric2coordinate"

/**
 * @description build HTML content of chessboard, and provide root element 
 */
export default function board(): HTMLDivElement {

  const root = document.createElement("div")

  root.id = ID_ROOT_CHESSBOARD_DEFAULT

  /** build chessboard elements inside root */

  for(let i = 0; i < 8; i++) {
    /** build 8 rows for the root */
    const row = document.createElement("div")

    const rowValue = i + 1

    row.setAttribute(DATA_ATTR_ROW_CHESSBOARD, rowValue.toString())

    /** build 8 columns for the current row  */
    for(let j = 0; j < 8; j++) {

      const column = document.createElement("div")

      const columnValue = j + 1

      const coordinate = numeric2coordinate({
        row: rowValue,
        column: columnValue
      })

      column.setAttribute(DATA_ATTR_COLUMN_CHESSBOARD, columnValue.toString())
      column.setAttribute(DATA_ATTR_COORDINATE_SQUARE, coordinate)
      column.classList.add(SQUARE_CLASSNAME)

      row.appendChild(column)
    }


    root.appendChild(row)
  }

  return root
}