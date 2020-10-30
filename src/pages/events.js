import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/reactCarousel'
import TitleHeading from '../components/TitleHeading'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/events.scss'



import c6 from '../../static/carousel/1.jpeg'
import c7 from '../../static/carousel/2.jpeg'

import c8 from '../../static/carousel/3.jpeg'
import c9 from '../../static/carousel/4.jpeg'


import c1 from '../../static/ssdayimages/1.jpg'
import c2 from '../../static/ssdayimages/2.jpg'
import c3 from '../../static/ssdayimages/3.jpg'
import c4 from '../../static/ssdayimages/4.jpg'
import c5 from '../../static/ssdayimages/5.jpg'

export default function Events() {
    return <div>
        <Header />
        <main>
            <TitleHeading heading="Events At AMUAAS" body="These events happen regularly at AMUAAS."/>
            <EventCarousel />
        </main>
        <Footer />
    </div>
}

function EventCarousel() {
    const events = [{ name: "Food Donation Drive", pic: [{ picture: c1, about: "SSD" }, { picture: c6, about: "SSD" }, { picture: c3, about: "SSD" }] }, { name: "SS Day 2017", pic: [{ picture: c7, about: "SSD" }, { picture: c5, about: "SSD" }, { picture: c3, about: "SSD" }] }, { name: "SS Day 2016", pic: [{ picture: c4, about: "SSD" }, { picture: c8, about: "SSD" }, { picture: c9, about: "SSD" }] }]

    const carouselSettings = {
        showThumbs: false,
        centerMode: true,
        infiniteLoop: true,
        centerSlidePercentage: 60,
        transitionTime: 500,
        showStatus: false,
        autoPlay: true,
        showArrows: true
    }

    return events.map(event =>
        <section className="slider">
            <div className="heading"><h2>{event.name}</h2><p>About:two lines aobut the evnet</p></div>
            <div className="carouselContainer">
                <div>
                    <Carousel {...carouselSettings} pictures={event.pic} />
                </div>
            </div>
        </section>)
}