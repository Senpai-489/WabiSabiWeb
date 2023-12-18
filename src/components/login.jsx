import React, { useState } from "react";
import SvgBack from "./svgbackground";
import Signup from "./SignupPop";

function Login(props){
    var [state_pop,updation]=useState(props.state);
    function popup(){
        updation(!state_pop);
    }
    return <div id="leftfloat">
        <SvgBack />
        <div className="signin">
        <form className="form">
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
    <button id="createacc" onClick={popup}>Create Account</button>
        </div>
        {<Signup state={state_pop}/>} 
    </div>
}
export default Login;