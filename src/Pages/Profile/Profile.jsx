import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import img5 from './../../Images/pp.jpg';
import img from './../../Images/shoes.jpg';
import Cart from "../../Component/CartListItem/CartListItem";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './Profile.css';
import { useEffect } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ProductCard from "../../Component/ProductCard/ProductCard";
import {fetchcategoryproduct,clear} from './../../Redux/Product/ProductActions';
import SendIcon from '@material-ui/icons/Send';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Profile=({fetchcategoryproduct,
    clear,products})=>{
        useEffect(() => {
            //cdm
            
            // const url=window.location.href;
            // const para=url.split("/");
            // setcategory(para[4])
            // // console.log(category)
            // console.log(para[4])
            
        fetchcategoryproduct()
            
    
        
        return ()=>{
        clear()
        }
                },[])
                
    return (
      
      <>
      <Navbar/>
      
    
      <div className="profileinfo">
<div className="circle11">
<div className="imagec">
    <img className="imagecfit"src={img5}/>
</div>
</div>
<div className="nameinfo">
    <p className="pinfo"><b>Name :</b> Bisma Asif</p>
    <p className="pinfo1"><b>Phone :</b> +923322150555</p>
    <Link to="/changedetail">
<button className="btn1">CHANGE DETAILS</button></Link> <button className="btn2">LOG OUT</button>
</div>
<div className="emailinfo">
<p className="pinfo2"><b>Email :</b> Bisma.asif@yahoo.com</p>
    <p className="pinfo3"><b>Address :</b> c-181 DHA, Karachi, Pakistan</p>
</div>
      </div>
      <h3 className="ysc">Your Shopping Cart <ShoppingCartOutlinedIcon fontSize="large" className="iconshop"/></h3>
      <div className="cartsinfo">
     
      <div className="displaypic">
<img className="fit" src={img}/>
            </div>
 <h3 className="displaytext">Pizza Box</h3>
 <p className="left">Lorem ipsum lorem ipsum lorem ipsum</p>
 
 <div className="qbox">
    <p className="dq">1</p>
    
 <div className="dq1"><p><ExpandLessIcon  fontSize="small"/></p><p> <ExpandMoreIcon  fontSize="small"/> </p></div>
 </div>
 <div  className="displaycost">
    <h2>$-568</h2>
 </div><br/>
 <div className="displaypic">
<img className="fit" src={img}/>
            </div>
 <h3 className="displaytext">Pizza Box</h3>
 <p className="left">Lorem ipsum lorem ipsum lorem ipsum</p>
 
 <div className="qbox">
    <p className="dq">1</p>
    
 <div className="dq1"><p><ExpandLessIcon  fontSize="small"/></p><p> <ExpandMoreIcon  fontSize="small"/> </p></div>
 </div>
 <div  className="displaycost">
    <h2>$-568</h2>
 </div>
      </div>
      <h3 className="ysc">Your Previous Order<SendIcon fontSize="large" className="iconshop"/></h3>
      <div className="cartsinfo1">
     
            <div className="displaypic">
<img className="fit" src={img}/>
            </div>
 <h3 className="displaytext">Pizza Box</h3>
 <p className="left">Lorem ipsum lorem ipsum lorem ipsum</p>
 
 <div className="qbox">
    <p className="dq">1</p>
    
 <div className="dq1"><p><ExpandLessIcon  fontSize="small"/></p><p> <ExpandMoreIcon  fontSize="small"/> </p></div>
 </div>
 <div  className="displaycost">
    <h2>$-568</h2>
 </div><br/>
 <div className="displaypic">
<img className="fit" src={img}/>
            </div>
 <h3 className="displaytext">Pizza Box</h3>
 <p className="left">Lorem ipsum lorem ipsum lorem ipsum</p>
 
 <div className="qbox">
    <p className="dq">1</p>
    
 <div className="dq1"><p><ExpandLessIcon  fontSize="small"/></p><p> <ExpandMoreIcon  fontSize="small"/> </p></div>
 </div>
 <div  className="displaycost">
    <h2>$-568</h2>
 </div>
        {/* <h1><button onClick={()=> addproduct(item)}>+</button >  {quantity}  <button onClick={()=> removeproduct(id)}>-</button></h1> */}
        </div>
      
      <h3 className="ysc">WishList<FavoriteBorderOutlinedIcon fontSize="large" className="iconshop"/></h3>
      
   <div className="fo">
      <div className="cartsinfo2">
      {/* <ArrowBackIosIcon className="back" fontSize="large"/> */}
      {products.map((product)=> <ProductCard key={product.id} {...product} /> )}
{/*     
      <ArrowForwardIosIcon className="front" fontSize="large"/> */}
     </div>
    <ArrowForwardIosIcon className="front" fontSize="large"/> 
      <ArrowBackIosIcon className="back" fontSize="large"/>
      </div>
    
      <hr  className="line"/>
      <Footer/>
      </>
        )
}
var mapState=(state)=>({
    products:state.products
    })
var actions={
    fetchcategoryproduct,
    clear,
    
}
export default connect(mapState,actions) (Profile);