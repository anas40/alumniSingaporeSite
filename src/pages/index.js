import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'

import Carousel from '../components/Carousel'

import '../css/index.scss'

import PI from '../../static/president.webp'

export default function Home() {
  return <div>
    <Header />
    <main>
      <Carousel />
      <div className="breakLine"></div>
      <section className="wordContainer">
        <section className="left">
          <article className="textPart">
            <div>
              <h2>Welcome To</h2>
              <h3>AMU Alumni Association of Singapore</h3>

            </div>
            <p>Aligarh Muslim University Alumni Association of Singapore,
            consisting of the alumni of Aligarh Muslim University
            and its friends and supporters of the Aligarh movement was founded in 2019
            as a secular, non-partisan, non-political organization serving the Educational,
            Social, Literary and Cultural needs of the community.
            It aims to keep alive Sir Syed Ahmad Khan's dream of ensuring equality
            for all and particularly the underprivileged through education,
            by supporting AMU and its students in their academic efforts,
            and by organizing events to highlight AMU's role in creating a modern India.</p>
            <p>AMU Alumni Association was granted a tax-exempt status,
               501(c) (3) designation, by the United States IRS in 2004.</p>

          </article>
        </section>
        <section className="right">
          <div className="imagePart">
            <img src={PI} alt="APJ Abdul Kalaam Azad" />
          </div>
        </section>
      </section>
    </main>
    <Footer />
  </div>
}
