import * as t from 'io-ts'
import { NextSeo } from 'next-seo'
import * as React from 'react'
import Nav from '../components/nav'
import { decodeJson } from '../utils/jsonDecoderConfig'
// import { Decoders } from '../jsonDecoders/decode.gen'
const User = t.type({
  userId: t.number,
  name: t.string,
})
export default () => {
  React.useEffect(() => {
    decodeJson(User, { name: 'duc' })
      .then((result) => {
        console.log('result', result)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }, [])
  return (
    <div>
      <NextSeo
        title="Battery Included Next.js"
        description="Battery Included Next.js template"
      />
      <Nav />
      <div className="hero">
        <h1 className="title">Battery included Next.js</h1>
        <p>
          env SECRET<strong>{process.env.SECRET}</strong>
        </p>
      </div>
    </div>
  )
}
