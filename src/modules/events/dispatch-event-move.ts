import { EventMove, MAPPING_CUSTOM_EVENTS_NAME } from "../constant"
import extractPieceType from "../utils/extract-piece-type";
import square2coordinate from "../utils/square2coordinate"

export interface DispatchEventMoveOptions {
  fromElement: HTMLDivElement;
  pieceElement: HTMLImageElement;
  isTakeMove: boolean;
  pieceToTakeElement?: HTMLImageElement;
  isGranted: (isGrantedMove: boolean) => void;
}

export default function dispatchEventMove({
  fromElement,
  pieceElement,
  isTakeMove,
  pieceToTakeElement,
  isGranted
}: DispatchEventMoveOptions) {

  const activeIntentEvent = new CustomEvent<EventMove>(
    MAPPING_CUSTOM_EVENTS_NAME.moveIntent, {
      detail: {
        from: {
          element: fromElement,
          coordinate: square2coordinate(fromElement)
        },
        to: {
          element: (pieceElement.parentNode as HTMLDivElement),
          coordinate: square2coordinate((pieceElement.parentNode as HTMLDivElement))
        },
        isTakeMove,
        piece: {
          element: pieceElement,
          type: extractPieceType(pieceElement)
        },
        pieceToTake: pieceToTakeElement ? {
          element: pieceToTakeElement,
          type: extractPieceType(pieceToTakeElement)
        }: undefined,
        isGranted
      }
    }
  )

  dispatchEvent(activeIntentEvent)
}