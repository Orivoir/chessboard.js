import { DATA_ATTR_PIECE_TYPE, EventNewActivePiece, MAPPING_CUSTOM_EVENTS_NAME, PIECES_BLACK_IMAGES_CLASSNAME, PieceType } from "../constant";
import fetchActivePiece from "../utils/fetch-active-piece";
import fetchAutoRoot from "../utils/fetch-auto-root";
import square2coordinate from "../utils/square2coordinate";
import dispatchEventMove from "./dispatch-event-move";

export default function onClickPiece(ev: MouseEvent, piece: HTMLImageElement) {

  const pieceActive = fetchActivePiece(fetchAutoRoot())

  const dispatchNewActivePieceEvent = () => {

    const newActivePieceEvent = new CustomEvent<EventNewActivePiece>(
      MAPPING_CUSTOM_EVENTS_NAME.activePieceIntent,
      {
        detail: {
          piece: {
            element: piece,
            type: (piece.getAttribute(DATA_ATTR_PIECE_TYPE) as PieceType)
          },
          square: {
            element: (piece.parentNode as HTMLDivElement),
            coordinate: square2coordinate((piece.parentNode as HTMLDivElement))
          },
          isGranted: (isGrantedActivePiece: boolean) => {

            if(isGrantedActivePiece) {

              if(pieceActive) {
                // unactive current active piece
              }

              // active the new active piece

            } else {
              // client has cancelled the active piece action
            }
          }
        }
      }
    )

    dispatchEvent(newActivePieceEvent)
  }

  if(pieceActive) {

    const pieceActiveColor = pieceActive.classList.contains(PIECES_BLACK_IMAGES_CLASSNAME) ? "b": "w"
    const pieceTargetColor = piece.classList.contains(PIECES_BLACK_IMAGES_CLASSNAME) ? "b": "w"

    if(pieceActiveColor === pieceTargetColor) {
      // user has clicked on other piece of same color
      // user intent change of active piece
      dispatchNewActivePieceEvent()
    } else {

      // user has clicked on other piece with diff color
      // user want move with take of the piece
      dispatchEventMove({
        fromElement: (pieceActive.parentNode as HTMLDivElement),
        isTakeMove: true,
        pieceElement: pieceActive,
        pieceToTakeElement: piece,
        isGranted: (isGrantedTakePiece: boolean) => {/* ... */} 
      })
    }
  } else {
    // user has choice (or change) a piece to move (without choice a square for the piece)
    // the piece should has a "active status" after the event (if it's granted by the client)
    dispatchNewActivePieceEvent()
  }
}