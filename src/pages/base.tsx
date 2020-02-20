import { NextSeo } from 'next-seo'
import * as React from 'react'
import Nav from '../components/nav'

export default () => {
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
