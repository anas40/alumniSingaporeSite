import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import '../css/carousel.scss';
import window from 'global/window'

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
} from '@material-ui/core';

//carousel images
import c6 from '../../static/carousel/1.jpeg'
import c7 from '../../static/carousel/2.jpeg'
import c8 from '../../static/carousel/3.jpeg'
import c9 from '../../static/carousel/4.jpeg'



import c1 from '../../static/events/SSD2018/2b.jpg'
import c2 from '../../static/events/SSD2018/2b.jpg'
import c3 from '../../static/events/SSD2018/2b.jpg'
import c4 from '../../static/events/SSD2018/2b.jpg'
import c5 from '../../static/events/SSD2018/2b.jpg'



function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = props.item.Image ? (<Grid item xs={12 / totalItems} key={props.item.Name}>
        <CardMedia
            className="Media"
            image={props.item.Image}
            title={props.item.Name}
        >

            <Typography className="MediaCaption">
                {props.item.Name}
            </Typography>


        </CardMedia>

    </Grid>) : (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" href="/events" className="ViewButton">
                    View Now
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength && props.item.Items; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >

                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>


                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }


    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

if (window.screen) {
    var deviceWidth = window.screen.width
}

const items = deviceWidth < 600 ? [
    {
        Name: "Sir Syed Day Celebration 2019",
        Caption: "Sir Syed Day Celebration",
        contentPosition: "left",
    },
    {
        Name: "Sir Syed Day Celebration",
        Image: c3
    },
    {
        Name: "Sir Syed Day Celebration",
        Image: c4
    }
    ,
    {
        Name: "Sir Syed Day 2020",
        Caption: "Sir Syed Day 2020 celebration at singapore",
        contentPosition: "middle",
    },
    {
        Name: "Sir Syed Day Celebration",
        Image: c8
    },
    {
        Name: "Sir Syed Day Celebration",
        Image: c6
    }
    ,
    {
        Name: "Sir Syed Day Celebration 2018",
        Caption: "Sir Syed Day Celebration 2018",
        contentPosition: "right",
    },
    {
        Name: "Sir Syed Day Celebration",
        Image: c1
    },
    {
        Name: "Sir Syed Day Celebration",
        Image: c2
    }
] : [
        {
            Name: "Sir Syed Day Celebration",
            Caption: "Sir Syed Day Celebration",
            contentPosition: "left",
            Items: [
                {
                    Name: "Sir Syed Day Celebration",
                    Image: c3
                },
                {
                    Name: "Sir Syed Day Celebration",
                    Image: c4
                }
            ]
        },
        {
            Name: "Sir Syed Day 2020",
            Caption: "Sir Syed Day 2020 celebration at singapore",
            contentPosition: "middle",
            Items: [
                {
                    Name: "Sir Syed Day Celebration",
                    Image: c8
                },
                {
                    Name: "Sir Syed Day Celebration",
                    Image: c6
                }
            ]
        },
        {
            Name: "Sir Syed Day Celebration",
            Caption: "Sir Syed Day Celebration",
            contentPosition: "right",
            Items: [
                {
                    Name: "Sir Syed Day Celebration",
                    Image: c1
                },
                {
                    Name: "Sir Syed Day Celebration",
                    Image: c2
                }
            ]
        }
    ]

class BannerExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            interval: 3000,
            animation: "fade",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false
        }

        autoBind(this);
    }


    render() {
        return <Carousel
            className="carousel"
            autoPlay={this.state.autoPlay}
            startAt={1}
            interval={this.state.interval}
            animation={this.state.animation}
            indicators={this.state.indicators}
            timeout={this.state.timeout}
            navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
            navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
        >
            {
                items.map((item, index) => {
                    return <Banner item={item} length={deviceWidth<600?1:3} key={index} contentPosition={item.contentPosition} />
                })
            }
        </Carousel>
    }
}

export default BannerExample;
