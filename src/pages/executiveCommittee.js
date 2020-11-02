import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleHeading from '../components/TitleHeading'

import '../css/meetTeam.scss'
import PI from '../../static/model.png'

export default function Events() {

    const members = [
        { name: "Name", position: "Position",image:PI },
        { name: "Name", position: "Position",image:PI },
        { name: "Name", position: "Position",image:PI }
    ]
    return <div>
        <Header />
        <main>
            <TitleHeading heading="Executive Team" body="Team which executes all functions." />
            <section className="teamContainer">
                <section className="onlyOne">
                    <div className="card">
                        <div className="imagePart">
                            <img src={PI} alt="President of AMUAAS" />
                        </div>
                        <div className="textPart">
                            <div>
                                <h2>APJ Abdul Kalam</h2>
                            </div>
                            <p>President</p>
                        </div>
                    </div>
                </section>
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
            </section>
        </main>
        <Footer />
    </div>
}
