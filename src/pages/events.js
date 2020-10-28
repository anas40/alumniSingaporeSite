import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Typography } from '@material-ui/core';
import Carousel from '../components/reactCarousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/events.scss'


export default function Events() {
    return <div>
        <Header />
        <main>
            <section>
                <div className="pageTitle"><h1>Events At AMUAAS Singapore</h1></div>
                <div className="text"><Typography>These are the past events, such events happen regularly here.</Typography></div>
            </section>
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
        autoPlay: false,
        showArrows: false
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