import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/reactCarousel'
import TitleHeading from '../components/TitleHeading'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/events.scss'


export default function Events() {
    return <div>
        <Header />
        <main>
            <TitleHeading />
            <EventCarousel />
        </main>
        <Footer />
    </div>
}

function EventCarousel() {
    const events = ["Food Donation Drive", "SS Day 2017", "SS Day 2016"]

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
            <div className="heading"><h2>{event}</h2><p>About:two lines aobut the evnet</p></div>
            <div className="carouselContainer">
                <div>
                    <Carousel {...carouselSettings} />
                </div>
            </div>
        </section>)
}