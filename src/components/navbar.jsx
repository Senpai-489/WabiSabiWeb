import React from "react";
import img from "./favicon.ico"
function Navbar() {
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
        <button className="sign_up_button ">Sign Up</button>
    </header>
}

export default Navbar;