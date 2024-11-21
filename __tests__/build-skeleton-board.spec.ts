import board from "./../src/modules/build-skeleton/board"
import {
  DATA_ATTR_COLUMN_CHESSBOARD,
  DATA_ATTR_ROW_CHESSBOARD,
  ID_ROOT_CHESSBOARD_DEFAULT
} from "./../src/modules/constant"

describe("src/modules/build-skeleton/board.js", () => {

  const rootBoard = board()

  test("board root", () => {
    expect(rootBoard).toBeInstanceOf(HTMLDivElement)
    expect(rootBoard.id).toBe(ID_ROOT_CHESSBOARD_DEFAULT)
  })

  const rows = rootBoard.children

  test("rows length", () => {
    expect(rows.length).toBe(8)
  })

  for(const row of rows) {

    test("current of each rows", () => {
      expect(row).toBeInstanceOf(HTMLDivElement)
      expect(row.getAttribute(DATA_ATTR_ROW_CHESSBOARD)).toBeTruthy()
    })

    const columns = row.children

    test("column length", () => {
      expect(columns.length).toBe(8)
    })

    for(const column of columns) {

      test("current of each column", () => {
        expect(column).toBeInstanceOf(HTMLDivElement)
        expect(column.getAttribute(DATA_ATTR_COLUMN_CHESSBOARD)).toBeTruthy()
      })
    }
  }
})