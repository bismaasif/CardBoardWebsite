import './Valuse.css';
import img from './../../Images/v2.png';
import img1 from './../../Images/v3.png';
import img2 from './../../Images/v4.jpg';
import img3 from './../../Images/v5.jpg';
import img4 from './../../Images/v6.jpg';
const Values=()=>{
    return( 
        <>
        <p className="heading">OUR VALUES</p>
        <div className="valcont">

<div className="v1">
    <img className="img" src={img}/>
</div>
<div className="vp1">
    <p className="para">It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum.</p>
</div>

<div className="v2">
    <img className="img" src={img1}/>
</div>
<div className="vp2">
    <p className="para">It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum.</p>
</div>

<div className="v3">
    <img className="img" src={img2}/>
</div>
<div className="vp3">
    <p className="para">It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum.</p>
</div>

<div className="v4">
    <img className="img" src={img3}/>
</div>
<div className="vp4">
    <p className="para">It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum .</p>
</div>

<div className="v5">
    <img className="img" src={img4}/>
</div>
<div className="vp5">
    <p className="para">It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. The point of
      using Lorem Ipsum.</p>
</div>

        </div>
        </>

    )
}
export default Values;