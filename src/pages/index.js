import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'

import Carousel from '../components/Carousel'
export default function Home() {
  return <div>
    <Header />
    <main>
      <Carousel />
    </main>
    <Footer />
  </div>
}
