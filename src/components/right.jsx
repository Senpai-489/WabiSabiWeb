import React from "react";
import  SvgLogo  from "./lomgo.svg";
function Right(){
    return <div className="rightfloat">
    <img id="mascot" src={SvgLogo} alt="logo"/>
    <h1>Hello! User</h1>
    </div>
}

export default Right;