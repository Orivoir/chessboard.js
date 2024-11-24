import type {PieceOptions} from "./../src/modules/build-skeleton/piece"
import piece from "./../src/modules/build-skeleton/piece"
import {MAPPING_PIECE_TYPE_NAME, PIECES_BLACK_IMAGES_CLASSNAME, PIECES_WHITE_IMAGES_CLASSNAME} from "./../src/modules/constant"

describe("src/modules/build-skeleton/piece.ts", () => {

  const FIXTURES: {input: PieceOptions; color: "b" | "w"}[] = [
    {
      input: {
        __tests__: true,
        pieceType: "bn",
        target: "x",
      },
      color: "b"
    },
    {
      input: {
        __tests__: true,
        pieceType: "wp",
        target: "x",
      },
      color: "w"
    },
    {
      input: {
        __tests__: true,
        pieceType: "bp",
        target: "x",
      },
      color: "b"
    },
    {
      input: {
        __tests__: true,
        pieceType: "wr",
        target: "x",
      },
      color: "w"
    },
    {
      input: {
        __tests__: true,
        pieceType: "wq",
        target: "x",
      },
      color: "w"
    },
    {
      input: {
        __tests__: true,
        pieceType: "bn",
        target: "x",
      },
      color: "b"
    }
  ]

  FIXTURES.forEach(fixture => {

    it(`should create image for ${MAPPING_PIECE_TYPE_NAME[fixture.input.pieceType]}`, async () => {
      
      const {image} = await piece(fixture.input)

      expect(image).toBeInstanceOf(HTMLImageElement)

      const pieceColorClassName = fixture.color === "b" ?
        PIECES_BLACK_IMAGES_CLASSNAME:
        PIECES_WHITE_IMAGES_CLASSNAME

      expect(image.classList.contains(pieceColorClassName)).toBe(true)

      expect(image.classList.length).toBe(3)
    })
  })


})