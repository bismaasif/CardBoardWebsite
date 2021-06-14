import Signup from "../../Component/Signup/Signup";
import Signin from "../../Component/Signin/Signin";
import Signout from "../../Component/Signout/Signout";
import Googlesignin from "../../Component/Googlesignin/Googlesignin";

const Authentication=()=>{
    return(
        <>
        <Signup/>
        <Signin/>
        <Signout/>
        <Googlesignin/>
        </>
        )
}
export default Authentication;