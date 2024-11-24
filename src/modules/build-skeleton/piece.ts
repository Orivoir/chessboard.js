import {
  PIECES_IMAGES_CLASSNAME,
  PIECES_REAL_SIZE_PX,
  MAPPING_PIECE_TYPE_NAME,
  PIECES_WHITE_IMAGES_CLASSNAME,
  PIECES_BLACK_IMAGES_CLASSNAME,
  DATA_ATTR_PIECE_TYPE
} from "../constant";
import type { PieceType } from "./../constant"

export interface PieceOptions {

  target: string;
  pieceType: PieceType;
  width?: number;
  height?: number;
  fallbackTarget?: string;
  onFullyFailed?: () => void;
  __tests__?: boolean;
}

/**
 * @description load image of chess piece and provide it from `onLoad({ev: Event; image: HTMLImageElement});` callback \
 * then `target` image and `fallbackTarget` image fail load also `onFullyFailled();` callback is trigger 
 */
export default async function piece({
  target,
  fallbackTarget,
  height,
  width,
  pieceType,
  onFullyFailed,

  __tests__
}: PieceOptions) {

  return new Promise((
    resolve: ({ev, image}: {ev: Event; image: HTMLImageElement}) => void,
    reject: ({ev}: {ev: Event}) => void
  ) => {

    const image = new Image()

    const classNamePieceColor = pieceType[0] === "w" ?
      PIECES_WHITE_IMAGES_CLASSNAME:
      PIECES_BLACK_IMAGES_CLASSNAME

    image.classList.add(PIECES_IMAGES_CLASSNAME)
    image.classList.add(classNamePieceColor)

    image.classList.add(`chessboard-piece-${pieceType}`)

    image.setAttribute(DATA_ATTR_PIECE_TYPE, pieceType)

    image.width = width || PIECES_REAL_SIZE_PX
    image.height = height || PIECES_REAL_SIZE_PX
    image.alt = `chess piece ${MAPPING_PIECE_TYPE_NAME[pieceType]}`

    if(!__tests__) {
      image.src = target
    }

    if(__tests__) {
      resolve({ev: new Event("load"), image})
    }

    if(!__tests__) {
      image.addEventListener("load", (ev: Event) => {

        resolve({
          ev,
          // try fetch image as long as implemented DOM but reply as virtualy element
          image: ev.target instanceof HTMLImageElement ? ev.target: image
        })
  
      }, {once: true})
    }

    if(!__tests__) {

      image.addEventListener("error", async (ev) => {

        if(!fallbackTarget) {
          reject({ev})
        }

        if(fallbackTarget) {
          /*
           * load image has failed
           * recall piece function with fallback target as new target (should use default theme piece then possible)
           * next call has non fallback target because if fallback target failed us infinite loop recursive with fallback target as target 
           * piece({..., target: fallbackTarget, fallbackTarget}) => error => call: piece({..., target: fallbackTarget, fallbackTarget}) => error => ...  
           */
          resolve(await piece({
            target: fallbackTarget,
            pieceType,
            fallbackTarget: undefined, // kill fallback target he used as target, broke infinite recursive call behavior, see comment above
            height,
            width,
            onFullyFailed,
            __tests__
          }))
        } else if(onFullyFailed instanceof Function) {
          // load failed with no fallback (or fallback failed too after recursive call)
          onFullyFailed()
        }
      }, {once: true})
    }

  })

}