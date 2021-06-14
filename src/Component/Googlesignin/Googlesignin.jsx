import React from 'react'
import { connect } from 'react-redux';
import {signinwithgoogle} from './../../Redux/auth/authActions';
const Googlesignin=({signinwithgoogle})=>{
    return(
        <>
        <button onClick={signinwithgoogle}>sign in with google</button>
        </>
    )
}
var actions={
    signinwithgoogle
}
export default connect(null,actions) (Googlesignin);