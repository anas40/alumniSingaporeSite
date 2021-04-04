import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/reactCarousel'
import TitleHeading from '../components/TitleHeading'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/events.scss'



import i2019a from '../../static/events/SSD2019/1.jpg'
import i2019b from '../../static/events/SSD2019/2.jpg'
import i2019c from '../../static/events/SSD2019/3.jpg'
import i2019d from '../../static/events/SSD2019/4.jpg'
import i2019e from '../../static/events/SSD2019/5.jpg'


// import c1 from '../../static/events/SSD2018/2b.jpg'
// import c2 from '../../static/events/SSD2018/2b.jpg'
// import c3 from '../../static/events/SSD2018/2b.jpg'
// import c4 from '../../static/events/SSD2018/2b.jpg'
// import c5 from '../../static/events/SSD2018/2b.jpg'

//2018 images
import i2018a from '../../static/events/SSD2018/2b.jpg'
import i2018b from '../../static/events/SSD2018/1b.jpg'

export default function Events() {
    return <div>
        <Header />
        <main>
            <TitleHeading heading="Events At AMUAAS" body="AMUAAS"/>
            <EventCarousel />
        </main>
        <Footer />
    </div>
}

function EventCarousel() {
    const events = [
        {
            name: "Sir Syed Day 2020 - Zoom Event", desc: "SSDAY 2020 was celebrated Virtually because fo COVID19 situation. The event had fun parts including Virtual Games and skit.",
            pic: [
                { picture: i2019a, about: "SSD" },
                { picture: i2019a, about: "SSD" },
                { picture: i2019a, about: "SSD" }
            ]
        },
        {
            name: "Sir Syed Day 2019", desc: "SSDAY 2019 was celebrated in Singapore, with a gathering of 50+ people. Program had many events and games with lunch.",
            pic: [
                { picture: i2019a, about: "SSD 2019" },
                { picture: i2019b, about: "SSD 2019" },
                { picture: i2019c, about: "SSD 2019" },
                { picture: i2019d, about: "SSD 2019" },
                { picture: i2019e, about: "SSD 2019" }
            ]
        },
        {
            name: "Sir Syed Day 2018", desc: "SSDAY 2018 was celebrated at Labrador Park Singapore, with large gathering. Program highlights we baitbaazi, and AMU stories.",
            pic: [
                { picture: i2018a, about: "SSD 2018" },
                { picture: i2018b, about: "SSD 2018" }
            ]
        }]

    const carouselSettings = window.screen.width<768?{
        showThumbs: false,
        centerMode: true,
        infiniteLoop: true,
        dynamicHeight:true,
        centerSlidePercentage: 100,
        transitionTime: 500,
        showStatus: false,
        autoPlay: true,
        showArrows: true
    } : {
        showThumbs: false,
        centerMode: true,
        infiniteLoop: true,
        dynamicHeight: true,
        centerSlidePercentage: 50,
        transitionTime: 500,
        showStatus: false,
        autoPlay: true,
        showArrows: true
    }

    return events.map(event =>
        <section className="slider">
            <div className="heading"><h2>{event.name}</h2><p>{event.desc}</p></div>
            <div className="carouselContainer">
                <div>
                    <Carousel {...carouselSettings} pictures={event.pic} />
                </div>
            </div>
        </section>)
}