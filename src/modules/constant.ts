export type ThemePiecesType = 
  "3d_chesskid" | "3d_plastic" | "3d_staunton" |
  "3d_wood" | "8_bit" | "alpha" | 
  "bases" | "book" | "bubblegum" | 
  "cases" | "classic" | "club" |
  "condal" | "dash" | "game_room" |
  "glass" | "gothic" | "graffiti" |
  "icy sea" | "light" | "lolz" |
  "marble" | "maya" | "metal" |
  "modern" | "nature" | "neo" |
  "neo_wood" | "neon" | "newspaper" |
  "ocean" | "real_3d" | "sky" |
  "space" | "tigers" | "tournament" |
  "vintage" | "wood"

export type PieceType = "bb" | "bk" | "bn" | "bp" | "bq" | "br" | "wb" | "wk" | "wn" | "wp" | "wq" | "wr"

export type SquareType = 'a8' | 'b8' | 'c8' | 'd8' | 'e8' | 'f8' | 'g8' | 'h8' |
'a7' | 'b7' | 'c7' | 'd7' | 'e7' | 'f7' | 'g7' | 'h7' |
'a6' | 'b6' | 'c6' | 'd6' | 'e6' | 'f6' | 'g6' | 'h6' |
'a5' | 'b5' | 'c5' | 'd5' | 'e5' | 'f5' | 'g5' | 'h5' |
'a4' | 'b4' | 'c4' | 'd4' | 'e4' | 'f4' | 'g4' | 'h4' |
'a3' | 'b3' | 'c3' | 'd3' | 'e3' | 'f3' | 'g3' | 'h3' |
'a2' | 'b2' | 'c2' | 'd2' | 'e2' | 'f2' | 'g2' | 'h2' |
'a1' | 'b1' | 'c1' | 'd1' | 'e1' | 'f1' | 'g1' | 'h1'

export type RowType = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h"

export type SchemaType = {
  [square in SquareType]?: PieceType
}

/**
 * @description default id html attribute for root chessboard element 
 * @constant ID_ROOT_CHESSBOARD_DEFAULT
 */
export const ID_ROOT_CHESSBOARD_DEFAULT = "chessboard"

export const DATA_ATTR_ROW_CHESSBOARD = "data-row-chessboard"

export const DATA_ATTR_COLUMN_CHESSBOARD = "data-column-chessboard"

export const DATA_ATTR_COORDINATE_SQUARE = "data-coordinate-square"

/**
 * @description theme pieces name concatenate to constant `BASE_URL_PIECES_IMAGES_CDN` for get image
 * @constant THEME_PIECES_DEFAULT
 */
export const THEME_PIECES_DEFAULT: ThemePiecesType = "alpha"

export const BASE_URL_PIECES_IMAGES_CDN = "https://www.unpkg.com/scraping-chess.com-pieces-theme@1.0.0/assets"

export const PIECES_IMAGES_EXTENSION = ".png"

export const PIECES_IMAGES_CLASSNAME = "chessboard-piece"

export const PIECES_WHITE_IMAGES_CLASSNAME = "chessboard-white-piece"

export const PIECES_BLACK_IMAGES_CLASSNAME = "chessboard-black-piece"

export const PIECES_REAL_SIZE_PX = 150

/**
 * @description schema based position that represent initial chess game position
 * @constant INITIAL_POSITION_SCHEMA
 */
export const INITIAL_POSITION_SCHEMA: SchemaType = {
  // white pieces at first row
  a1: "wr",
  b1: "wn",
  c1: "wb",
  d1: "wq",
  e1: "wk",
  f1: "wb",
  g1: "wn",
  h1: "wr",
  h2: "wp",
  g2: "wp",
  f2: "wp",
  e2: "wp",
  d2: "wp",
  c2: "wp",
  b2: "wp",
  a2: "wp",

  // black pieces at last row
  a8: "br",
  b8: "bn",
  c8: "bb",
  d8: "bq",
  e8: "bk",
  f8: "bb",
  g8: "bn",
  h8: "br",
  h7: "bp",
  g7: "bp",
  f7: "bp",
  e7: "bp",
  d7: "bp",
  c7: "bp",
  b7: "bp",
  a7: "bp"
}

export const MAPPING_ROW_ALPHA_NUMERIC = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8
}

export const MAPPING_PIECE_TYPE_NAME: {[type in PieceType]: string} = {
  bb: "black bishop",
  bk: "black king",
  bn: "black knight",
  bp: "black pawn",
  bq: "black queen",
  br: "black rook",
  wb: "white bishop",
  wk: "white king",
  wn: "white knight",
  wp: "white pawn",
  wq: "white queen",
  wr: "white rook"
}