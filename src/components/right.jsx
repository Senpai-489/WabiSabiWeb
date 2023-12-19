import React from "react";
import  SvgLogo  from "./lomgo.svg";
document.addEventListener('mousemove',(e)=>{
    var xPos=e.clientX/window.innerWidth;
    var yPos=e.clientY/window.innerHeight;
    const xPupil=xPos*25;
    const yPupil=yPos*35;
   var pupils= document.getElementsByClassName('dot');
   var pupilsArr=Array.from(pupils);
   pupilsArr.forEach((element) => {
    element.style.transform=`translate(${xPupil}px,${yPupil}px)`;
    
   });
})
function Right(){
    return <div className="rightfloat">
    <div className="eye">
    <span class="dot"></span>
    <span class="dot"></span>
    </div>
    <img id="mascot" src={SvgLogo} alt="logo"/>
    
    <h1>Hello! User</h1>
    </div>
}

export default Right;