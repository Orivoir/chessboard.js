import { PIECE_ACTIVE_CLASSNAME } from "../constant"
import extractPieces from "./extract-pieces"

/**
 * @description find piece has been activate from event into the root chessboard **if** not exists return `null` value
 */
export default function fetchActivePiece(root: HTMLDivElement): HTMLImageElement | null {

  const pieces = extractPieces(root)

  const activePiece = pieces.find(piece => (
    piece.classList.contains(PIECE_ACTIVE_CLASSNAME)
  )) || null

  return activePiece
}