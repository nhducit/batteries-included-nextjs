import { fold } from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
import * as t from 'io-ts'
import { reporter } from 'io-ts-reporters'

export function decodeJson<Type, OutPut, Input>(
  // use io-ts to creatte validators
  validator: t.Type<Type, OutPut, Input>,
  // json object
  input: Input,
): Promise<Type> {
  const result = validator.decode(input)

  return new Promise((resolve, reject) => {
    pipe(
      result,
      fold(
        errors => {
          const messages = reporter(result)
          reject(new Error(messages.join('\n')))
        },
        value => resolve(value),
      ),
    )
  })
}
