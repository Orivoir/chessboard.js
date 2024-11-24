/**
 * @description provides list of squares from root HTML chessboard element
 */
export default function extractSquare(root: HTMLDivElement): HTMLCollection[] {

  const rows = root.children

  const squares: HTMLCollection[] = []

  for(const row of rows) {

    const squaresCollection = row.children

    squares.push(squaresCollection)
  }

  return squares
}