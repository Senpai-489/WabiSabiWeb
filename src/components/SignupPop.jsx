import React from "react";

function Signup(props){
    
    
     return <div className="SignUp" style={{display: props.state?'none':'inline'}}>
         <form class="form formsignup">
         <button id="cross">X</button>
         <label  for="Name"><b>Name</b></label><br/>
    <input type="text" placeholder=" Enter Your Name" name="Name" required />
    <br/><br/>

        <label  for="email"><b>Email</b></label><br/>
    <input type="text" placeholder=" example@gmail.com" name="email" required />
    <br/><br/>

    <label  for="phone"><b>Phone</b></label><br/>
    <input type="text" placeholder=" +91----------" name="phone" required />
    <br/><br/>

    <label  for="psw"><b>Password</b></label><br/>
    <input type="password" placeholder=" Enter Password" name="psw" required />
    <br/><br/>

    <button type="submit">Sign up</button>
        </form>
    </div>
}

export default Signup;