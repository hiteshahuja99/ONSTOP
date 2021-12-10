import { Link } from 'react-router-dom';
import './index.css';
import home from '../../assets/images/home.jpg' ;

function Navbar() {
    return ( 


   <div className="navigation d-flex">
           {/* <div > */}
<Link to="/" className={"link fl"}><img src={home} style={{height:'40px',border:'2px solid #0c8bc2 '}}></img></Link>

<Link to="/" className={`link fl  ${window.location.pathname==='/'?' activate':''}`}><div class="mt-2">Home</div></Link>

<Link to="/contact-us" className={`link fl ${window.location.pathname==='/contact-us'?' activate':''}`}><div class="mt-2">Contact-Us</div></Link>
{/* </div> */}
</div>
  


        );
}

export default Navbar;