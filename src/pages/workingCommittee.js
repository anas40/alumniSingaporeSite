import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleHeading from '../components/TitleHeading'

import '../css/meetTeam.scss'
import PI from '../../static/model.jpg'

export default function Events() {

    const members = [
        { name: "Name", position: "Position", image: PI },
        { name: "Name", position: "Position", image: PI },
        { name: "Name", position: "Position", image: PI }
    ]
    return <div>
        <Header />
        <main>
            <TitleHeading heading="Working Team" body="Team which executes all functions." />
            <section className="teamContainer">
                <section className="multiple">
                    {members.map(person => <div className="card">
                        <div className="imagePart">
                            <img src={person.image} alt="President of AMUAAS" />
                        </div>
                        <div className="textPart">
                            <div>
                                <h2>{person.name}</h2>
                            </div>
                            <p>{person.position}</p>
                        </div>
                    </div>
                    )
                    }
                </section>
                <div className="belt">
                    <img id="filterImage1" className="filterImage" src={PI} alt="President of AMUAAS" />
                    <img id="filterImage2" className="filterImage" src={PI} alt="President of AMUAAS" />
                    <img id="filterImage3" className="filterImage" src={PI} alt="President of AMUAAS" />
                </div>
            </section>
        </main>
        <Footer />
    </div>
}
