import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleHeading from '../components/TitleHeading'

import '../css/meetTeam.scss'
import daud from '../../static/comm/daudwbg.png'
import ali from '../../static/comm/aliwbg.png'
import mariam from '../../static/comm/mariamwbg.png'
import saifullah from '../../static/comm/saifullahwbg.png'
import zia from '../../static/comm/ziawbg.png'
import haris from '../../static/comm/hariswbg.png'
// import PI from '../../static/comm/wbg.png'
import avatar from '../../static/avatarwbg.png'



export default function Events() {

    const members = [
        { name: "Zia Haider", position: "", image: zia },
        { name: "Haris Farooqi", position: "", image: haris },
        { name: "Daud Zaidi", position: "", image: daud },
        { name: "Mariam shaheen", position: "", image: mariam },
        { name: "Ali Yousuf Zaidi", position: "", image: ali },
        { name: "M.Mamoon Rasheed", position: "", image: avatar },
        { name: "Najeeb", position: "", image: avatar },
        { name: "Saifullah Saifi", position: "", image: saifullah },

    ]
    return <div>
        <Header />
        <main>
            <TitleHeading heading="Working Team" body="" />
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
              
            </section>
        </main>
        <Footer />
    </div>
}
