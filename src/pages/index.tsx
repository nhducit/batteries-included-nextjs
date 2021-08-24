import { NextSeo } from 'next-seo'
import * as React from 'react'
import Nav from '../components/nav'

export default function Index() {
  return (
    <div>
      <NextSeo
        title="Battery Included Next.js"
        description="Battery Included Next.js template"
      />
      <Nav />
      <div className="">
        <h1 className="title">Battery included Next.js</h1>
        <p></p>
      </div>
    </div>
  )
}
