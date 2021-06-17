import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
const Footer=()=>{
    return( 
        <>
<div className="footer">
    <div className="address">
        <p><b>Address</b></p>
        <p>h-121 DHA Karachi,Pakistan</p>
        <br/>
        <br/>
        <p>Street 1001, Lane Badar</p>
        <p>CA Code 1445</p>
    </div>
    <div className="directory">
        <p><b>Directory</b></p>
        <div className="col1">
            <p>Home </p><br/><br/>
            <p>Contact Us
            </p><br/><br/>
            <p>About Us</p><br/><br/>
        </div>
        
    </div>
    <div className="col2">
            <p>Products </p><br/>
            <p>Value
            </p><br/>
            <p>Register</p><br/><br/>
        </div>
        <div className="info">
            <p><b>Phone</b></p>
            <p>03322150555</p>
            <p>03334291870</p><br/>
            <p><b>email</b></p>
            <p>Care@cardboard.gmail.com</p><br/>
            <h3> <FacebookIcon fontSize="large"/>  <InstagramIcon fontSize="large"/>  <LinkedInIcon fontSize="large"/>  <TwitterIcon fontSize="large"/> </h3>
        </div>
</div>
        </>

    )
}
export default Footer;