import type { EventMove, EventSquareClick } from "../constant";
import {MAPPING_CUSTOM_EVENTS_NAME} from "../constant"
import extractPieceType from "../utils/extract-piece-type";
import fetchActivePiece from "../utils/fetch-active-piece";
import fetchAutoRoot from "../utils/fetch-auto-root";
import square2coordinate from "../utils/square2coordinate";
import dispatchEventMove from "./dispatch-event-move";


export function onClickSquare(ev: MouseEvent, square: HTMLDivElement) {

  const activePiece = fetchActivePiece(fetchAutoRoot())

  if(!activePiece) {
    /*
     * user has clicked square without select any piece
     * logic game want this is a non-intent action click
     */
    const nonIntentSquareClickEvent = new CustomEvent<EventSquareClick>(
      MAPPING_CUSTOM_EVENTS_NAME.nonIntentSquareClick,
      {
        detail: {
          square: {
            element: square,
            coordinate: square2coordinate(square)
          }
        }
      }
    )

    dispatchEvent(nonIntentSquareClickEvent)

  } else {
    // user has intent move piece on empty square
    dispatchEventMove({
      fromElement: square,
      isTakeMove: false,
      pieceElement: activePiece,
      isGranted: (isGrantedMove: boolean) => {/* ... */}
    })

  }
}
