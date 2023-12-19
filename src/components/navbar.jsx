import React, { useState } from "react";
import Signup from "./SignupPop";
import img from "./favicon.ico"
function Navbar() {
    var [state_pop,updation]=useState(false);
    function popup(){
        updation(!state_pop);

    }
    return <header className="header">
        <div className="logo_and_ico">
            <h1 className="wabiSabiTop">Wabi<br />Sabi</h1>
            <img className="wabiSabiTop" src={img} id="logoIco" alt="Logo" />
        </div>
        <nav>
            <ul className="nav_links">
                <li><a href="#" />Home</li>
                <li><a href="#" />About</li>
                <li><a href="#" />Services</li>
            </ul>
        </nav>
         <Signup state={state_pop} />
        <button className="sign_up_button " onClick={popup}>Sign Up</button>
    </header>
}

export default Navbar;
export var state_pop;