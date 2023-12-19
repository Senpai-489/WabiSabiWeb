import React, { useState } from "react";
import SvgBack from "./svgbackground";
import Signup from "./SignupPop";
    var state_pop;
    function updation(){};
function Login(props){
     [state_pop,updation]=useState(props.state);
    function pop(){
        popup(updation,state_pop)
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
    <button id="createacc" onClick={pop}>Create Account</button>
        </div>
        {<Signup state={state_pop}/>} 
    </div>
    
}

    function popup(updation,state_pop){
        updation(!state_pop);
    }
export default Login;
export {state_pop};