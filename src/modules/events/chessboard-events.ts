export interface ChessboardEventsOptions {
  squares: HTMLDivElement[];
  pieces: HTMLImageElement[];
  onClickSquare: (ev: MouseEvent, square: HTMLDivElement) => void;
  onClickPiece: (ev: MouseEvent, piece: HTMLImageElement) => void;
}

/**
 *  @description attach click events at chessboard squares and pieces \
 *  back value is a object allow remove events with: \
 * `chessboardEvents({...}).squaresEvent()` \
 * `chessboardEvents({...}).piecesEvent()`
 */
export function chessboardEvents({
  squares,
  pieces,
  onClickSquare,
  onClickPiece
}: ChessboardEventsOptions): {
  squaresEvent: () => void;
  piecesEvent: () => void;
} {

  squares.forEach(square => {
    square.addEventListener("click", onClickSquareOverride)
  })

  pieces.forEach(piece => {
    piece.addEventListener("click", onClickPieceOverride)
  })


  const onClickPieceOverride = function (this: HTMLImageElement, ev: MouseEvent) {
    onClickPiece(ev, this)
  }

  const onClickSquareOverride = function(this: HTMLDivElement, ev: MouseEvent) {
    onClickSquare(ev, this)
  }

  return {
    squaresEvent: () => (
      squares.forEach(square => (
        square.removeEventListener("click", onClickSquareOverride)
      ))
    ),
    piecesEvent: () => (
      pieces.forEach(piece => (
        piece.removeEventListener("click", onClickPieceOverride)
      ))
    ),
  }
}