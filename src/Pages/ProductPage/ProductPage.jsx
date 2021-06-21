import Navbar from '../../Component/Navbar/Navbar'
import './ProductPage.css';
import img from './../../Images/cover1.jpg';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import CategoryProduct from '../CategoryProduct/CategoryProduct';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CategoryList from '../../Component/CategoryList/CategoryList';
import { useEffect, useState } from "react";
import Footer from '../../Component/Footer/Footer';
const ProductPage=()=>{
        var[category,setcategory]=useState("pizza");


    useEffect(() => {
        //cdm
         
        // if(category==="pizza"){
        //     fetchcategoryproduct()
        //    }
        // else  if(category==="shipping"){
        //     fetchcategoryproduct1();
       
        //    }
           
    
        // console.log(category)
        // console.log(para[4])
   
            },[])
            
    return (
      
      
      <>

      <Navbar/>
      <div className="cp">
<img classNmae="cp1" src={img}/>
      </div>
      <div className="category">

<div className="c1" onClick={()=>setcategory("pizza")}>
  {/* <Link to="/categoryproduct/pizza"> */}
    Category 1
    {/* </Link> */}
</div>
<div className="c2" onClick={()=>setcategory("shipping")}>
    {/* <Link to="/categoryproduct/shipping"> */}
    Category 2
    {/* </Link> */}
</div>
<div className="c3">
    Category 3
</div>
<div className="c4">
    Category 4
</div>
<div className="c5">
<div class="search">
            <form action="#">
                <input className="ser" type="text"
                    placeholder=" Search"
                    name="search"/>
                
                
                <button>
<FavoriteBorderOutlinedIcon/>
                </button>
                <button>
                    <Link to="/cart">
                    <ShoppingCartOutlinedIcon className="icon"/>
                    </Link>
                </button>
                <button>
                    <SearchOutlinedIcon />
                </button>
            </form>
        </div>
      </div>
    </div>
    
 {category==="pizza" ?  <CategoryProduct category="pizza"/> :null}
 {category==="shipping" ?  <CategoryProduct category="shipping"/> :null}

   <Footer/>

      </>
      
      )
}


export default ProductPage;
