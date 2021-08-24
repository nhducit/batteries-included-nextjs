/* TypeScript file generated from decode.re by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import type { Json_t as Js_Json_t } from '../../src/shims/Js.shim'
import * as decodeBS__Es6Import from './decode.bs'
const decodeBS: any = decodeBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type language = {
  readonly languageId: string
  readonly code: string
  readonly niceName: string
}

// tslint:disable-next-line:interface-over-type-literal
export type user = { readonly userId: string; readonly name: string }

export const Decoders_users: (json: Js_Json_t) => user[] =
  decodeBS.Decoders.users

export const Decoders: { users: (json: Js_Json_t) => user[] } =
  decodeBS.Decoders
