import './Designbox.css';
import img5 from './../../Images/shoes.jpg';
const Designbox=({...item})=>{
    var{title,description}=item;
    return (
        <>
        <img className="dbboxi" src={img5}/>
        <h2 className="dbboxh">{title}</h2>
        <p className="dbboxp">{description}</p>
        {/* <img className="dbboxi" src={img5}/> */}

        </>

    )
}

export default Designbox;