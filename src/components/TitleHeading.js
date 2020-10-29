import React from "react"
import { Typography } from '@material-ui/core';

import '../css/titleHeading.scss'

export default function Events(props) {
    return <section className="pageTitle">
        <div><h1>{props.heading}</h1></div>
        <div className="text"><Typography>{props.body}</Typography></div>
    </section>
}
