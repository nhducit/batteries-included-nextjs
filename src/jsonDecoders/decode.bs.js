// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Json_decode from '@glennsl/bs-json/src/Json_decode.bs.js'

function users(json) {
  return Json_decode.array(function (json) {
    return {
      userId: Json_decode.field('userId', Json_decode.string, json),
      name: Json_decode.field('name', Json_decode.string, json),
    }
  }, json)
}

var Decoders = {
  users: users,
}

export { Decoders }
/* No side effect */
