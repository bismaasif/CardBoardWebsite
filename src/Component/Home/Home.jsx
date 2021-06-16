import ProductDisplay from "../../Pages/ProductDisplay/ProductDisplay";
import Authentication from '../../Pages/Authentication/Authentication';
import Aboutus from "../Aboutus/Aboutus";

const Home=()=>{
    return(
        <>
<Authentication/>
<ProductDisplay/>
<Aboutus/>
            </>
            )
}

export default Home;