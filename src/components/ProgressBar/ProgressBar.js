import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import GradientSVG from './Gradient-svg';

const ProgressBar =() =>{
    const percentage = 87;
    const S1 = {
        "width": "150px",
        "height": "150px",
        "marginLeft": "30px",
        "marginBottom": "50px",
    }
    const idCSS = "hello";
    return(
        <div style={S1}>
            <GradientSVG />
            <CircularProgressbar styles={{ path: { stroke: `url(#${idCSS})`, height: "100%" },
            trail: {stroke: "#151515" }, text: {fill: "#fff" } }} value={percentage} text={`${percentage}%`} />
        </div>    )
}

export default ProgressBar;