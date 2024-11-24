import pieces from "./../src/modules/build-skeleton/pieces"
import board from "./../src/modules/build-skeleton/board"
import { PIECES_BLACK_IMAGES_CLASSNAME, PIECES_WHITE_IMAGES_CLASSNAME } from "../src/modules/constant"

let imagesPieces: HTMLImageElement[] = [] 

beforeAll(async () => {
  
  const chessboard = board()

  imagesPieces = await pieces({
    root: chessboard,
    // schema: default (initial position chess game)
    // pieceTheme: default (alpha theme pieces)
    __tests__: true // fake load image
  })
})

describe("src/modules/build-skeleton/pieces.ts", () => {

  test("should append 32 pieces into chessboard", () => {
    expect(imagesPieces.length).toBe(32)
  })

  test("should append 16 white pieces into chessboard", () => {
    const whitePieces = imagesPieces.filter(imagePiece => (
      imagePiece.classList.contains(PIECES_WHITE_IMAGES_CLASSNAME)
    ))

    expect(whitePieces.length).toBe(16)
  })

  test("should append 16 black pieces into chessboard", () => {
    const blackPieces = imagesPieces.filter(imagePiece => (
      imagePiece.classList.contains(PIECES_BLACK_IMAGES_CLASSNAME)
    ))

    expect(blackPieces.length).toBe(16)
  })

  test("should append 8 white pawn", () => {

    const whitePawns = imagesPieces.filter(imagePiece => (
      imagePiece.classList.contains("chessboard-piece-wp")
    ))

    expect(whitePawns.length).toBe(8)
  })

  test("should append 8 black pawn", () => {

    const blackPawns = imagesPieces.filter(imagePiece => (
      imagePiece.classList.contains("chessboard-piece-bp")
    ))

    expect(blackPawns.length).toBe(8)
  })

  test("should append 2 white rooks", () => {

    const whiteRooks = imagesPieces.filter(imagePiece => (
      imagePiece.classList.contains("chessboard-piece-wr")
    ))

    expect(whiteRooks.length).toBe(2)
  })

  test("should append 2 black rooks", () => {

    const blackRooks = imagesPieces.filter(imagePiece => (
      imagePiece.classList.contains("chessboard-piece-br")
    ))

    expect(blackRooks.length).toBe(2)
  })

  test("should append 2 white bishop", () => {

    const whiteBishops = imagesPieces.filter(imagePiece => (
      imagePiece.classList.contains("chessboard-piece-wb")
    ))

    expect(whiteBishops.length).toBe(2)
  })

  test("should append 2 black bishop", () => {

    const blackBishops = imagesPieces.filter(imagePiece => (
      imagePiece.classList.contains("chessboard-piece-bb")
    ))

    expect(blackBishops.length).toBe(2)
  })

  test("should append 2 white knights", () => {

    const whiteKnights = imagesPieces.filter(imagePiece => (
      imagePiece.classList.contains("chessboard-piece-wn")
    ))

    expect(whiteKnights.length).toBe(2)
  })

  test("should append 2 black knights", () => {

    const blackKnights = imagesPieces.filter(imagePiece => (
      imagePiece.classList.contains("chessboard-piece-bn")
    ))

    expect(blackKnights.length).toBe(2)
  })

})