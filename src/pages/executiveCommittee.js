import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleHeading from '../components/TitleHeading'

import '../css/meetTeam.scss'
import hina from '../../static/comm/hinawbg.png'
import farah from '../../static/comm/farahwbg.png'
import rabiul from '../../static/comm/rabiulwbg.png'


export default function Events() {

    const members = [
        { name: "Farah Zia", position: "President", image: farah },
        { name: "Hina Harris", position: "Secretary",image:hina },
        { name: "Rabiul Hossain", position: "Treasurer",image:rabiul },
        // { name: "Name", position: "Position", image: d }

    ]
    return <div>
        <Header />
        <main>
            <TitleHeading heading="Executive Team" body="" />
            <section className="teamContainer">
                {/* <section className="onlyOne">
                    <div className="card">
                        <div className="imagePart">
                            <img src={e} alt="President of AMUAAS" />
                        </div>
                        <div className="textPart">
                            <div>
                                <h2>Harish Faruqi</h2>
                            </div>
                            <p>President</p>
                        </div>
                    </div>
                </section> */}
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
