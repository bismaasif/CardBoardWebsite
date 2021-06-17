import './Contactus.css';
import React from 'react';
import img from './../../Images/map.png';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import { green } from '@material-ui/core/colors';
// import {
//   fade,
//   ThemeProvider,
//   withStyles,
//   createMuiTheme,
// } from '@material-ui/core/styles';

const Contactus=()=>{

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     color: 'green',
    
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: '25ch',
//   },
// }));
// const theme = createMuiTheme({
//     palette: {
//       primary: green,
//     },
//   });
//   const classes = useStyles(); 
    return(
        <>
        <div className="contact">
            <p className="h1">CONTACT US</p>
            <p className="h2">LOCATION</p>
            <div className="form">
<input className="input1" type="text" placeholder="First Name"/>  
<input className="input2" type="text" placeholder="Last Name"/>
<br/>
<br/>
<input className="input3" type="text" placeholder="Email"/>
<br/>
<br/>
<input className="input5" type="text" placeholder="Subject"/>
<br/>
<br/>
<input className="input4" type="text" placeholder="Message"/>
<br/>
<br/>
<button className="btn" >Submit</button>

{/* ...................................................................... */}
            {/* <TextField
          
          id="outlined-margin-dense"
          defaultValue="First Name"
          className={classes.textField}
          margin="dense"
          variant="filled" */}
        {/* <ThemeProvider theme={theme}> */}
        {/* <TextField
          className={classes.margin}
          label="ThemeProvider"
          id="mui-theme-provider-standard-input"
        /> */}
        {/* <TextField
          className={classes.margin}
          label="ThemeProvider"
          variant="filled"
          id="mui-theme-provider-outlined-input"
        />
         <TextField
          className={classes.margin}
          label="ThemeProvider"
          variant="filled"
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider> */}

            </div>
            <div className="map">
                <img className="mappic" src={img}/>
            </div>
        </div>
        </>

    )
}
export default Contactus;