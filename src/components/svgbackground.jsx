import React from "react";
import Svglogo from "./lomgo.svg"

function SvgLogo(){
    return (<div className="logo">
    
    <Svglogo />
    </div>)

}
function SvgBack(){
    return <svg id="loginback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><path class="cls-1" d="m101.5,128.5c63.23-62.33,166.09-77.76,201-83,34.4-5.16,132.51-18.61,239,28,106.6,46.65,227.16,155.91,236,281,16.27,230.19-347.68,487.13-568,382C10.53,641.56-38.82,266.82,101.5,128.5Z"/></svg>

}
export default SvgBack;
export {SvgLogo};