import './Navbar.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
const Navbar=()=>{

      
    return(
        <>

<div className="Navbar">
        <div className="logo">
            
            <p>CardBoardWebsite</p> 
           
        
        </div>
       
        <div className="navitemcontainer">
            <div className="navitem">
                {/* <Link to="/"> */}
                <h4 ><b>HOME</b></h4>
                {/* </Link> */}
               
               
                </div>
            <div className="navitem">
                {/* <Link to="/featuredres"> */}
                <h4>Products</h4>
                {/* </Link> */}
                
               
                </div>
                <div className="navitem">
                {/* <Link to="/buynow"> */}
                <h4>Profile</h4>
                {/* </Link> */}
                
               
                </div>

                <div className="navitem">
                
               {/* < Link to="/howtouse">  */}
               <h4>Log In</h4>
               {/* </Link> */}
               
                </div>
                <div class="check">
            <DehazeIcon/>
            </div>
        </div>
        
        </div>
       
        </>
        
        )
}
export default Navbar;