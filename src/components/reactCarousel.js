import React from "react";
import { Carousel } from "react-responsive-carousel";


import c1 from '../../static/carousel/1.jpeg'
import c2 from '../../static/carousel/2.jpeg'

import c3 from '../../static/carousel/3.jpeg'
import c4 from '../../static/carousel/4.jpeg'


export default (props) => (
    <Carousel {...props}>
        <div>
            <img alt="" src={c1} />
            <p className="legend customizeLegend">Legend 1</p>
        </div>
        <div>
            <img alt="" src={c2} />
            <p className="legend customizeLegend">Legend 2</p>
        </div>
        <div>
            <img alt="" src={c4} />
            <p className="legend customizeLegend">Legend 3</p>
        </div>     
    </Carousel>
);
