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


//json
import jsonContent from "../../static/store/routesJSON"
import contactContent from "../../static/store/contact"

//css
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/footer.scss';

//mapping icons for dynamic import
const mapIcon = {
    FaImages, FaHandshake, FaMicrophone, FaHome, MdContactPhone, MdWork, MdEvent, MdPhoto, GoPerson, GoInfo, BsFillPeopleFill, RiTeamFill
}


function Footer() {

    const content = jsonContent

    return <footer>
        <div className="footerContainer">
            <section className="left">
                <section className="contact">
                    <div><p className="heading">Contact Us</p></div>
                    <div className="contactInfo">
                        <div className="location "><MdLocationOn className="icon" />AMU Alumni Association Singapore</div>
                        <div><a href={`mailto:${contactContent.email}`}><MdEmail className="icon" />{contactContent.email}</a></div>
                        <div><a href={`tel:${contactContent.number}`}><FaPhone className="icon" />{contactContent.number}</a></div>
                    </div>
                </section>
                <section className="social">
                    <div><p className="heading">Follow Us</p></div>
                    <div>
                        <div><p className="red">AMU Alumni Association of Singapore.</p></div>
                        <div className="mediaLinks">
                            <div><a href={contactContent.facebook}><FaFacebook /></a></div>
                            <div><a href={contactContent.twitter}><FaTwitter /></a></div>
                            <div><a href={contactContent.instagram}><FaInstagram /></a></div>
                            <div><a href={contactContent.youtube}><FaYoutube /></a></div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="flinks">
                <div><p className="heading">Links</p></div>
                <div className="footerLinks">
                    {content.map(item => <div className="footerlinkcontainer">
                        <div className="footerLinkHeading">
                            <p className="red">{item.sub.length === 0 ? <a href={item.href}>{item.tag}</a> :item.tag}</p>
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