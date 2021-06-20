import React ,{useState}from 'react'
import { connect } from 'react-redux';
import {signin} from './../../Redux/auth/authActions';
import './Signin.css'
const Signin=({signin})=>{

    var [Email, setEmail]=useState("");
    var [Password, setPassword]=useState("");
    var formsubmit=(e)=>{
        e.preventDefault();
        var cred={
        
            Email,Password
        }
        signin(cred)
    }
    return(
        <>
        <p className="welcome"><b>Welcome Back</b></p>
        <form onSubmit={formsubmit}>
            <input className="field1" value={Email} onChange={(e)=> {setEmail(e.target.value)}} type="email" placeholder="Email"/>
         <br/>
            <input className="field2" value={Password} onChange={(e)=> {setPassword(e.target.value)}} type="text" placeholder="Password"/>
           <br/>
           <p className="txt">Forgot Account?</p>
           <br/>
            <button className="field3" type="submit"><b>LOG IN</b></button>
        </form>


        </>
    )
}
var actions={
    signin
}
export default connect(null,actions)(Signin);