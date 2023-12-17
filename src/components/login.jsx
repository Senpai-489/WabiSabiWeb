import React from "react";
import SvgBack from "./svgbackground";
function Login(){
    return <div>
        <SvgBack />
        <div className="signin">
        <form class="form">
        <label  for="uname"><b>Email</b></label><br/>
    <input type="text" placeholder=" example@gmail.com" name="uname" required />
    <br/>
    <br/>
    <label  for="psw"><b>Password</b></label><br/>
    <input type="password" placeholder=" Enter Password" name="psw" required />
    <br/>
    <br/>
    <button type="submit">Sign in</button>
        </form>
    <p>Don't have an account yet?</p>
    <button id="createacc">Create Account</button>
        </div>
    </div>
}
export default Login;