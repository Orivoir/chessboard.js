import { DATA_ATTR_PIECE_TYPE, PieceType } from "../constant";

export default function extractPieceType(piece: HTMLImageElement): PieceType {

  const pieceType = piece.getAttribute(DATA_ATTR_PIECE_TYPE)

  if(!pieceType) {
    throw new Error(`can't extract piece type`)
  }

  return pieceType as PieceType
}