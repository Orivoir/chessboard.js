import board from "./../src/modules/build-skeleton/board"
import pieces from "./../src/modules/build-skeleton/pieces"
import fetchAutoRoot from "./../src/modules/utils/fetch-auto-root"

import extractPieces from "./../src/modules/utils/extract-pieces"
import { PIECES_WHITE_IMAGES_CLASSNAME } from "../src/modules/constant"

beforeEach(async () => {

  document.body.innerHTML = ""

  const chessboard = board()

  document.body.appendChild(chessboard)

  await pieces({
    root: chessboard,
    __tests__: true,
    // pieceTheme: default value theme
    // schema: default schema (initial chess game position)
  })

})

afterAll(() => {
  document.body.innerHTML = ""
})

describe("src/utils/extract-pieces.ts", () => {

  test("should extract 32 pieces of chessboard", () => {

    const root = fetchAutoRoot()

    const piecesExtracted = extractPieces(root)

    expect(piecesExtracted.length).toBe(32)
  })

  test("should extract 0 pieces of chessboard", () => {

    const root = fetchAutoRoot()

    const piecesImg = root.querySelectorAll("img")

    for(const pieceImg of piecesImg) {
      pieceImg.parentNode?.removeChild(pieceImg)
    }

    const piecesExtracted = extractPieces(root)

    expect(piecesExtracted.length).toBe(0)
  })

  test("should extract 16 pieces of chessboard", () => {

    const root = fetchAutoRoot()

    const piecesImg = root.querySelectorAll("img")

    for(const pieceImg of piecesImg) {

      if(pieceImg.classList.contains(PIECES_WHITE_IMAGES_CLASSNAME)) { 
        pieceImg.parentNode?.removeChild(pieceImg)
      }
    }

    const piecesExtracted = extractPieces(root)

    expect(piecesExtracted.length).toBe(16)
  })

  

})