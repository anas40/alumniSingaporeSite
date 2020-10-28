import React from "react"

//icons
import { FaFacebook, FaTwitter, FaPhone, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BiDonateHeart } from 'react-icons/bi'
import Button from '@material-ui/core/Button';

//logo
import logo from '../../static/logo.jpeg'

//css
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/header.css'

//components
import { Navbar, Nav } from 'react-bootstrap'
import Menu from './Menu'


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
                        <p>A Non-Profit 501 (c) (3) Educational & Charitable Organization Tax ID 94-3366186</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="contact">
                    <div><a href="mailto:demo@demo.com"><MdEmail />demo@demo.com</a></div>
                    <div><a href="tel:+123123123"><FaPhone />+1212123434</a></div>
                </div>
                <div className="reach">
                    <div className="links">
                        <div><a href="#"><FaFacebook /></a></div>
                        <div><a href="#"><FaTwitter /></a></div>
                        <div><a href="#"><FaInstagram /></a></div>
                        <div><a href="#"><FaYoutube /></a></div>
                    </div>
                    <Button className="donateButton" variant="contained" color="secondary">
                        Donate<BiDonateHeart />
                    </Button>
                </div>
            </div>
        </section>
        <NavCompo />
    </header>
}

function NavCompo() {
    const content = [
        {
            tag: "Home",
            link: '',
            icon: 'FaHome',
            sub: [{
                tag: "Intro",
                link: '',
                icon: 'FaMicrophone'
            }, {
                tag: "Picture",
                link: '',
                icon: 'MdPhoto'
            }]
        }, {
            tag: "About AMUAAS",
            link: '',
            icon: 'GoInfo',
            sub: [{
                tag: "Words from President",
                link: '',
                icon: 'GoPerson'
            }, {
                tag: " Intro",
                    icon: 'FaMicrophone',
                link: ''
            }, {
                tag: "Contact Us",
                link: '',
                icon: 'MdContactPhone'
            }]
        }, {
            tag: "Events ",
            link: '',
            icon: 'MdEvent',
            sub: [{
                tag: "Pictures and text from Past Events",
                link: '',
                icon: 'FaImages'
            }, {
                tag: "Gallery. (ssd, food donations)",
                link: '',
                icon: 'FaImages'
            }]
        }, {
            tag: "Meet Our Teams",
            link: '',
            icon:'FaHandshake',
            sub: [{
                tag: "Executive Committee",
                link: '',
                icon: 'RiTeamFill'
            }, {
                tag: "Working Committee",
                link: '',
                icon: 'BsFillPeopleFill'
            }]
        }

    ]
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