import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleHeading from '../components/TitleHeading'

import '../css/wFP.scss'
import PI from '../../static/president.webp'

export default function Events() {
    return <div>
        <Header />
        <main>
            <TitleHeading heading="Words From President" body="h'ble president of india said this." />
            <section className="wordContainer">
                <section className="left">
                    <article className="textPart">
                        <div>
                            <h2>Some Heading</h2>
                        </div>
                        <p>so i said about them.</p>
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
