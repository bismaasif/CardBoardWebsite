
import img from './../../Images/aboutus.jpg';
import img1 from './../../Images/picture.jpg';
import img2 from './../../Images/slider.PNG';
import img3 from './../../Images/slider.jpg';
import './Aboutus.css';
const Aboutus=()=>
{

    return(
        <>
<div className="aboutus">
    <img className="coverpic" src={img}/>
    <p className="au">ABOUT US</p>
</div>

<div className="aboutus1">

<div className="paragraph">
    <p>It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of 
      letters, as opposed to using 'Content here,
     content here', making it look like readable English.</p>
</div>

<div className="picture">
    <img src={img1}/>
</div>
</div>

<div className="slider">
<img className="picture" src={img2}/>
</div>


<div className="aboutus2">

<div className="paragraph2">
    <p>It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of 
      letters, as opposed to using 'Content here,
     content here', making it look like readable English.</p>
</div>

<div className="picture2">
    <img src={img3}/>
</div>
</div>
        </>

    )
}
export default Aboutus;