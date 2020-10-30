import React from "react";
import { Carousel } from "react-responsive-carousel";


export default (props) => (
    <Carousel {...props}>
        {props.pictures.map(pic => <div>
            <img alt="" src={pic.picture} />
            <p className="legend customizeLegend">{pic.about}</p>
        </div>)
        }


    </Carousel>
);
