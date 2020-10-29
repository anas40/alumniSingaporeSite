import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleHeading from '../components/TitleHeading'

import { MdPhoneInTalk } from 'react-icons/md'
import { FaAddressBook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import contactContent from "../../static/store/contact"

import '../css/contact.scss'

export default function Events() {

    return <div>
        <Header />
        <main>
            <TitleHeading heading="Contact Us" />
            <section className="contactContainer">
                <section>
                    <div className="phone">
                        <div className="icon"><MdPhoneInTalk /></div>
                        <div><a href={`tel:${contactContent.number}`}>{contactContent.number}</a></div>
                    </div>
                    <div className="address">
                        <div className="icon"><FaAddressBook /></div>
                        <div><p>bloack A, street B, Singapore</p></div>

                    </div>
                    <div className="email">
                        <div className="icon"><HiOutlineMail /></div>
                        <div><a href={`mailto:${contactContent.email}`}>{contactContent.email}</a></div>
                    </div>
                </section>

            </section>
        </main>
        <Footer />
    </div>
}
