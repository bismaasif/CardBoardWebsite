import Signup from "../../Component/Signup/Signup";
import Signin from "../../Component/Signin/Signin";
import Signout from "../../Component/Signout/Signout";
import Googlesignin from "../../Component/Googlesignin/Googlesignin";
import Footer from '../../Component/Footer/Footer';
import './Authentication.css';
import Navbar from "../../Component/Navbar/Navbar";

const Authentication=()=>{
    return(
        <>
        <Navbar/>

<div className="auth">
<div className="signup">
<Signup/>
</div>
<div className="signin">
<Signin/>
</div>
</div>
<hr className="line"/>

       <Footer/>
      
        {/* <Signout/>
        <Googlesignin/> */}
        </>
        )
}
export default Authentication;