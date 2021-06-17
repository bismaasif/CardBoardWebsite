import ProductDisplay from "../../Pages/ProductDisplay/ProductDisplay";
import Authentication from '../../Pages/Authentication/Authentication';
import Aboutus from "../Aboutus/Aboutus";
import Values from "../Values/Values";
import Contactus from "../Contactus/Contactus";
import Footer from "../Footer/Footer";

const Home=()=>{
    return(
        <>

<ProductDisplay/>
<Aboutus/>
<Values/>
<Contactus/>
<Footer/>
            </>
            )
}

export default Home;