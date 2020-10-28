import React from "react"


//icons
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FaFacebook, FaTwitter, FaPhone, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaImages, FaMicrophone, FaHome, FaHandshake } from 'react-icons/fa'
import { MdPhoto, MdContactPhone, MdWork, MdEvent } from 'react-icons/md'
import { GoPerson, GoInfo } from 'react-icons/go'
import { BsFillPeopleFill } from 'react-icons/bs'
import { RiTeamFill } from 'react-icons/ri'

//logo
// import logo from '../../static/logo.jpeg'


//css
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/footer.css'

//mapping icons for dynamic import
const mapIcon = {
    FaImages, FaHandshake, FaMicrophone, FaHome, MdContactPhone, MdWork, MdEvent, MdPhoto, GoPerson, GoInfo, BsFillPeopleFill, RiTeamFill
}




function Footer() {

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
            icon: 'FaHandshake',
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

    return <footer>
        <div className="footerContainer">
            <section className="left">
                <section className="contact">
                    <div><p className="heading">Contact Us</p></div>
                    <div className="contactInfo">
                        <div className="location "><MdLocationOn className="icon" />AMU Alumni Association Singapore</div>
                        <div><a href="mailto:demo@demo.com"><MdEmail className="icon" />demo@demo.com</a></div>
                        <div><a href="tel:+123123123"><FaPhone className="icon" />+1212123434</a></div>
                    </div>
                </section>
                <section className="social">
                    <div><p className="heading">Follow Us</p></div>
                    <div>
                        <div><p className="red">AMU Alumni Association of Singapore.</p></div>
                        <div className="mediaLinks">
                            <div><a href="#"><FaFacebook /></a></div>
                            <div><a href="#"><FaTwitter /></a></div>
                            <div><a href="#"><FaInstagram /></a></div>
                            <div><a href="#"><FaYoutube /></a></div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="flinks">
                <div><p className="heading">Links</p></div>
                <div className="footerLinks">
                    {content.map(item => <div className="footerlinkcontainer">
                        <div className="footerLinkHeading">
                            <p className="red">{item.tag}</p>
                        </div>
                        {item.sub.map(sub => <div><a href={sub.link}><p className="green">{React.createElement(mapIcon[sub.icon], { fontSize: "medium", className: 'icon' })}{sub.tag}</p></a></div>)}
                    </div>
                    )}
                </div>
            </section>
        </div>
        <div className="copyrightMsg">
            <p>Copy right @ amuAlumni Singapore</p>
        </div>
    </footer>
}

export default Footer