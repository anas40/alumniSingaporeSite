import React from "react"

import { FaFacebookSquare, FaTwitterSquare, FaPhone, FaInstagramSquare, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BiDonateHeart } from 'react-icons/bi'

import logo from '../../static/logo.jpeg'

function Header() {
    return <header>
        <section>
            <div className="left">
                <div><img src={logo} alt="logo" /></div>
                <div className="container">
                    <div className="associationName">
                        <p>AMU Alumni Association</p>
                    </div>
                    <div className="location">
                        <p>Singapore</p>
                    </div>
                    <div className="nonProfit">
                        <p>A Non-Profit 501 (c) (3) Educational & Charitable Organization Tax ID 94-3366186</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div>
                    <div><MdEmail />mail</div>
                    <div><FaPhone />number</div>
                </div>
                <div>
                    <div className="links">
                        <div><a href="#"><FaFacebookSquare />Facebook</a></div>
                        <div><a href="#"><FaTwitterSquare /></a></div>
                        <div><a href="#"><FaInstagramSquare /></a></div>
                        <div><a href="#"><FaYoutube /></a></div>
                    </div>
                    <div className="donateButton">Donate<BiDonateHeart /></div>
                </div>
            </div>
        </section>
        <nav></nav>
    </header>
}

export default Header