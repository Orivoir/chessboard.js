import type { PieceType, SchemaType, SquareType, ThemePiecesType } from "../constant";
import {
  THEME_PIECES_DEFAULT,
  INITIAL_POSITION_SCHEMA,
  BASE_URL_PIECES_IMAGES_CDN,
  PIECES_IMAGES_EXTENSION
} from "../constant"; 

import fetchSquareFromCoordinate from "../utils/fetch-square-from-coordinate";
import piece from "./piece";

export interface PiecesOptions {
  root: HTMLDivElement;
  schema?: SchemaType;
  pieceTheme?: ThemePiecesType;
  __tests__?: boolean;
}

/**
 * @description Hydrate chessboard with chess pieces, schema options is a mapping: `square coordinate => piece type` \
 * allow define custom position, with **default** value initial chess position is hydrated 
 */
export default async function pieces({
  root,
  schema,
  pieceTheme,
  __tests__
}: PiecesOptions) {

  const customSchema = schema || INITIAL_POSITION_SCHEMA

  const theme = pieceTheme || THEME_PIECES_DEFAULT
  
  const urlPieceTheme = `${BASE_URL_PIECES_IMAGES_CDN}/${theme}/`

  const getImage = (piece: PieceType): string => (
    `${urlPieceTheme}${piece}${PIECES_IMAGES_EXTENSION}`
  )

  const coordinates: SquareType[] = (Object.getOwnPropertyNames(customSchema) as SquareType[])

  const images: HTMLImageElement[] = []
  
  // append piece for each coordinate
  for(const coordinate of coordinates) {

    const pieceType = customSchema[coordinate] as PieceType

    const square = fetchSquareFromCoordinate(root, coordinate)

    if(!square) {
      throw new TypeError(`cant fetch square in chessboard for coordinate ${coordinate}.`)
    }

    const {image} = await piece({
      target: getImage(pieceType),
      pieceType,
      // fallback image it's based on default theme piece 
      fallbackTarget: `${BASE_URL_PIECES_IMAGES_CDN}/${THEME_PIECES_DEFAULT}/${pieceType}${PIECES_IMAGES_EXTENSION}`,
      onFullyFailed: () => {
        // target and fallback target load has failed
        throw new Error(`failed load image piece for ${pieceType} with ${theme} theme and default reply theme has failed too`)
      },
      __tests__
    })

    square.appendChild(image)
    images.push(image)
  }

  return images
}