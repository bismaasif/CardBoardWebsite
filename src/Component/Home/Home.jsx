import ProductDisplay from "../../Pages/ProductDisplay/ProductDisplay";
import Authentication from '../../Pages/Authentication/Authentication';
import Aboutus from "../Aboutus/Aboutus";
import Values from "../Values/Values";
import Contactus from "../Contactus/Contactus";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Cover from "../Cover/Cover";

const Home=()=>{
    return(
        <>
<Navbar/>
<Cover/>
<ProductDisplay/>
<Aboutus/>
<Values/>
<Contactus/>
<Footer/>
            </>
            )
}

export default Home;