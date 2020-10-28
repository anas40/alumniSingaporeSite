import React from "react";
import { Carousel } from "react-responsive-carousel";

export default (props) => (
    <Carousel {...props}>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
            <p className="legend customizeLegend">Legend 1</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
            <p className="legend customizeLegend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
            <p className="legend customizeLegend">Legend 3</p>
        </div>     
    </Carousel>
);
