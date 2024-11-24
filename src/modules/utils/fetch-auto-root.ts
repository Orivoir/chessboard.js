import { ID_ROOT_CHESSBOARD_DEFAULT } from "../constant";

export default function fetchAutoRoot(id?: string): HTMLDivElement {

  const root = document.querySelector(`#${id || ID_ROOT_CHESSBOARD_DEFAULT}`)

  if(!root || !(root instanceof HTMLDivElement)) {
    throw new TypeError(`Auto fetch root chessboard a fail with id: "#${id || ID_ROOT_CHESSBOARD_DEFAULT}"`)
  }

  return root
}