import ProductDisplay from "../../Pages/ProductDisplay/ProductDisplay";
import Authentication from '../../Pages/Authentication/Authentication';
import Aboutus from "../Aboutus/Aboutus";
import Values from "../Values/Values";

const Home=()=>{
    return(
        <>
<Authentication/>
<ProductDisplay/>
<Aboutus/>
<Values/>
            </>
            )
}

export default Home;