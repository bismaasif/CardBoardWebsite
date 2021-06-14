import React, { useState } from 'react';
import './ProductDisplay.css';
import img1 from './../../Images/burger3d.png';
import img2 from './../../Images/shifting.jpg';
import img3 from './../../Images/pizza.jpg';
import img4 from './../../Images/shoes.jpg';
import img5 from './../../Images/moving.jpg';
import img6 from './../../Images/cor.jpg'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {fetchcategoryproduct} from './../../Redux/Product/ProductActions';


const ProductDisplay=()=>{
    var[value,setvalue]=useState(1);
    var[category,setcategory]=useState("pizza")
    var [category1,setcategory1]=useState("shipping")
    // var btn=document.getElementById('bt');
    // btn.addEventListener("click",setvalue=setvalue(2))
    // btn.addEventListener("click",btn.style.display="grid")

    
    
    return(
        
        <>

<h3>Our Products</h3>
<div className="container">
<div  className="img1">
    <Link to={`/categoryproduct/${category}`}>
    <img className="img" src={img1}/>
    </Link>
</div>
<div className="para1">
<p className="para">It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of 
      letters, as opposed to using 'Content here,
     content here', making it look like readable English.</p>
     </div>
<div className="img2">
<Link to={`/categoryproduct/${category1}`}>
    <img className="img" src={img2}/>
    </Link>
</div>

<div className="para2">
    <p className="para">It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of 
      letters, as opposed to using 'Content here,
     content here', making it look like readable English.</p>
</div>
<div className="img3">
    <img className="img" src={img3}/>
</div>
<div className="para3">
    <p className="para">It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of 
      letters, as opposed to using 'Content here,
     content here', making it look like readable English.</p>
</div>
</div>
<br/>


<div className="cont1" id="cont" style={{display:"none"}}>
<div className="i1">
<img className="img" src={img4}/>
</div>
<div className="p1">
    <p>It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of 
      letters, as opposed to using 'Content here,
     content here', making it look like readable English.</p>
</div>

<div className="i2">
<img className="img" src={img5}/>
</div>
<div className="p2">
    <p>It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of 
      letters, as opposed to using 'Content here,
     content here', making it look like readable English.</p>
</div>

<div className="i3">
<img className="img" src={img6}/>
</div>
<div className="p3">
    <p>It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of 
      letters, as opposed to using 'Content here,
     content here', making it look like readable English.</p>
</div>
</div>
{/* { function show(){document.getElementById('cont').style.display='grid'}} */}
 {value===1 ? <button className="container2" onClick={()=> { setvalue=setvalue(2); document.getElementById('cont').style.display='grid'}}   >View more</button> :null}
{/* {value==="hello"? <button className="container2" onClick={()=>document.getElementById('cont').style.display='block',setvalue=setvalue("hi")} >View more</button>:null} */}
{/* {document.getElementById('cont').style.display==="none" ? <button onClick={()=>{document.getElementById('cont').style.display='grid'}}>view more</button>:null} */}

{/* <button id="bt" onClick={show()}>viewmore</button> */}
</>
     

    )
}

export default  ProductDisplay;