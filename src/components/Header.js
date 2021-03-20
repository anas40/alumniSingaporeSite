import React from "react"

//icons
import { FaFacebook, FaTwitter, FaPhone, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdAssignmentInd } from 'react-icons/md'
// import { BiDonateHeart } from 'react-icons/bi'
import Button from '@material-ui/core/Button';

//logo
import logo from '../../static/logo.jpeg'

//css
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/header.css'

//components
import { Navbar, Nav } from 'react-bootstrap'
import Menu from './Menu'

//json
import jsonContent from "../../static/store/routesJSON"
import contactContent from "../../static/store/contact"

function Header() {
    return <header>
        <section>
            <div className="left">
                <div id="logo"><img src={logo} alt="logo" /></div>
                <div className="Hcontainer">
                    <div className="associationName">
                        <p>AMU Alumni Association</p>
                    </div>
                    <div className="location">
                        <p>Singapore</p>
                    </div>
                    <div className="nonProfit">
                        <p>AMUAAS aims to keep alive Sir Syed Ahmad Khan's dream of ensuring equality
            for all.</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="contact">
                    <div><a href={`mailto:${contactContent.email}`}><MdEmail />{contactContent.email}</a></div>
                    <div><a href={`tel:${contactContent.number}`}><FaPhone />{contactContent.number}</a></div>
                </div>
                <div className="reach">
                    <div className="links">
                        <div><a href={contactContent.facebook} target="_blank"><FaFacebook /></a></div>
                        {/* <div><a href={contactContent.twitter}><FaTwitter /></a></div>
                        <div><a href={contactContent.instagram}><FaInstagram /></a></div>
                        <div><a href={contactContent.youtube}><FaYoutube /></a></div> */}
                    </div>
                    <Button target="_blank" href="https://www.cognitoforms.com/AMUAlumniAssociationSingapore/AMUAlumniAssociationSingaporeRegistration" className="donateButton" variant="contained" color="secondary">
                        Join Us
                    </Button>
                </div>
            </div>
        </section>
        <NavCompo />
    </header>
}

function NavCompo() {
    const content = jsonContent
    return <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                {content.map(item => <Menu item={item} />)}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}


export default Header
