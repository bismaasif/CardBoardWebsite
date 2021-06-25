import React, { useState } from 'react'
import {signup} from './../../Redux/auth/authActions'
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import './Signup.css'
const Signup=({signup})=>{
  const [currency, setCurrency] = React.useState('EUR');
  const [head,sethead]=useState("");
   const url=window.location.href;
        const para=url.split("/");
        
        // console.log(category)
        console.log(para[3])
    

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
 const currencies = [
      {
        value: 'USD',
        label: '12',
      },
      {
        value: 'EUR',
        label: '17',
      },
      {
        value: 'BTC',
        label: '21',
      },
      {
        value: 'JPY',
        label: '6',
      },
    ];
    const month = [
        {
          value: 'USD',
          label: 'may',
        },
        {
          value: 'EUR',
          label: 'june',
        },
        {
          value: 'BTC',
          label: 'july',
        },
        {
          value: 'JPY',
          label: 'August',
        },
      ];
      const year= [
        {
          value: 'USD',
          label: '1999',
        },
        {
          value: 'EUR',
          label: '1998',
        },
        {
          value: 'BTC',
          label: '1997',
        },
        {
          value: 'JPY',
          label: '1996',
        },
      ];
    var [Fullname, setFullname]=useState("");
    var [Email, setEmail]=useState("");
    var [Password, setPassword]=useState("");
    var formsubmit=(e)=>{
        e.preventDefault();

        var cred={
            Fullname,Email,Password
        }
        signup(cred)
    }
   
    return(
        
        <>
        {para[3]==="auth"?<p className="he"><b>Register Now</b></p>:<p className="he"><b>CHANGE PERSONAL DETAILS</b></p>}
        {/* <p className="he"><b>Register Now</b></p> */}
        <form onSubmit={formsubmit}>
          <input className="plain1" value={Fullname} onChange={(e)=> setFullname(e.target.value)} type="text" placeholder="First Name"/> <input className="plain11" type="text" placeholder="Last Name"/>
            <br/>
           <input className="plain2" value={Email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Email"/>
           <br/>
            <input className="plain3" value={Password} onChange={(e)=> setPassword(e.target.value)} type="text" placeholder="New Password"/>
           <br/>
           <p className="bdo">Birthday</p>
           <br/>
           <div className="f1">
           <TextField 
          id="standard-select-currency-native"
          select
 
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
         
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </div>
        <div className="f2">
        <TextField 
          id="standard-select-currency-native"
          select
 
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
         
        >
          {month.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </div>
        <div className="f33">
        <TextField 
          id="standard-select-currency-native"
          select
 
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
         
        >
          {year.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </div>
        
        <br/>
        <input className ="male" type="Radio" name="Male" value="male"/> Male
        <input className="female" type="Radio" name="Male" value="male"/> Female
        <input className="other" type="Radio" name="Male" value="male"/> Other
        <br/>
  <p className="par">You can learn more about the difference by reading this guide.
       Provides context such as filled/focused/error/required for form 
         the children of the
         FormControl.</p>
         {para[3]==="auth"? <button className="text4" type="submit">CREATE ACCOUNT</button>: <button className="text4" type="submit">SAVE CHANGES</button>}
        </form>
        </>
    )
}
var actions={
    signup
}
export default connect(null,actions)(Signup);