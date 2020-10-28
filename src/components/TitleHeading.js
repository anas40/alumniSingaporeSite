import React from "react"
import { Typography } from '@material-ui/core';

import '../css/titleHeading.scss'

export default function Events() {
    return <section className="pageTitle">
        <div><h1>Events At AMUAAS Singapore</h1></div>
        <div className="text"><Typography>These are the past events, such events happen regularly here.</Typography></div>
    </section>
}
