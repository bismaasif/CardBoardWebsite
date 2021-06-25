import './ChangeDetail.css';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import Signup from '../../Component/Signup/Signup';
import img5 from './../../Images/pp.jpg';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
const ChangeDetail=()=>{
    function chooseFile() {
        document.getElementById("fileInput").click();
     }
    return (
        <>
        <Navbar/>
        <div className="changebox">
<div className="formfill">
    {/* <p className="pos">Name</p>
    <p className="pos1">Email</p>
    <p className="pos2">Password</p> */}
<Signup/>
</div>
<div className="imageupload">
<div className="pro">
<img src={img5} className="fit"/>
</div>
{/* <input type="file" placeholder="Upload"/> */}
<input type="file" id="fileInput" name="fileInput" />
<button className="uppro" type="button" onClick={chooseFile}> <p className="st"><CameraAltIcon className="cm"/>Change Profile Photo </p></button>

</div>
        </div>
        <hr className="line"/>
        <Footer/>
        </>
        )
}
export default ChangeDetail;