import {PIECES_IMAGES_CLASSNAME} from "./../constant"

export default function extractPieces(root: HTMLDivElement): HTMLImageElement[] {

  return [...root.querySelectorAll(`.${PIECES_IMAGES_CLASSNAME}`)] as HTMLImageElement[]
} 