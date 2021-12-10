import Navbar from "../../Uitools/Navbar";
import logo from '../../assets/images/LOGO.jpg';
import '../Homepage/index.css';
import {FaRocket,FaUserCog,FaHandshake,FaMailBulk} from 'react-icons/fa';

function Homepage() {
    return ( 
        <>
       <Navbar/>
       <div className="homepage">
           <div className="container">
               <div className="row">
                          <div className="col-lg-6" style={{marginTop:'5%',borderRadius:'4%'}}>
                <img src={logo}  style={{height:'100%', width:'100%',borderRadius:'4%',border:'3px solid #0c8bc2'}} />
               </div>
               <div className="col-lg-6" style={{marginTop:'5%',color:'white'}}>
                  <div className="container p-5 ml-3" style={{backgroundColor:'#0c8bc2',height:'100%',borderRadius:'4%',fontSize:'13px',border:'2px solid #fdb816 '}}>
               
                <p className="hover">  Any of the Govt. works seem to be complicated and tends to be an headache for common people as many of the hidden regulations and criteria make people stuck through 
                these official processes. Also checking of the Particular of the Asset along with it’s history during financing is the most essential and critical thing and will ensure and prevent all kind of fraud associated in the registration of the asset with multiple places.
</p>
<hr />
<p className="hover">
Thus, proceeding for any of such work, people / lenders always need a firm support and adviser to guide through those processes and ensure work completion in minimum time without any failure with complete due diligence.
</p>
<hr />
<p className="hover">
Taking these needs into consideration, we are working to help people / organizations through all RTO works and processes. Though we were working offline, we were able to help a limited group of people through direct contacts, now we are open to all through a group of experienced versatile personalities who have joined their hands and formed “On-Stop Associates” where all the partners have diverse experience in their own field.
                </p>
                
                  </div>
               </div>
               </div>



               <div className="row mt-5 mb-5">
                   
               
                 <div className="col">
                 <div class="flip-card mt-2">
  <div class="flip-card-inner">
    <div class="flip-card-front text-center">
   <FaRocket className="mt-5 mb-1" style={{fontSize:'200px', color:'#fdb816' }} /> <br />
<div style={{color:'#0c8bc2',fontSize:'20px'}}>MISSION</div>
    </div>
    <div class="flip-card-back">
      
    <div className="text-center p-2" style={{marginTop:'30%'}}>
    Our Mission is to be a leading consulting firm operating throughout the country. Our success is measured by the value we deliver to our clients.
     </div>
     
    </div>
  </div>
</div>
                 </div>
                 <div className="col">
                 <div class="flip-card mt-2">
  <div class="flip-card-inner">
  <div class="flip-card-front text-center">
   <FaUserCog className="mt-5 mb-1" style={{fontSize:'200px', color:'#fdb816' }} /> <br />
<div style={{color:'#0c8bc2',fontSize:'20px'}}>Responsibility</div>
    </div>
    <div class="flip-card-back">

    <div className="text-center p-2" style={{marginTop:'30%'}}>
    These all works are more about responsibility and we take care to be right at every step.

</div> 
     
    </div>
  </div>
</div>
                 </div>
                 <div className="col">
                 <div class="flip-card mt-2">
  <div class="flip-card-inner">
  <div class="flip-card-front text-center">
   <FaHandshake className="mt-5 mb-1" style={{fontSize:'200px', color:'#fdb816' }} /> <br />
<div style={{color:'#0c8bc2',fontSize:'20px'}}>Company Value</div>
    </div>
    <div class="flip-card-back">
      
      <div className="text-center p-2" style={{marginTop:'30%'}}>

      We believe that the success is always followed by quality of service we provide and thus maintains our Reputation among crowd.

</div>
     
    </div>
  </div>
</div>
                 </div>
                 <div className="col">
                 <div class="flip-card mt-2">
  <div class="flip-card-inner">
  <div class="flip-card-front text-center">
   <FaMailBulk className="mt-5 mb-1" style={{fontSize:'200px', color:'#fdb816' }} /> <br />
<div style={{color:'#0c8bc2',fontSize:'20px'}}>Contact Us</div>
    </div>
    <div class="flip-card-back">
      
       <div className="text-center p-2" style={{marginTop:'30%'}}>
       Call : +91 98766 78726
       <br />
Email : onstopassociates@gmail.com
</div>
     
    </div>
  </div>
</div>
                 </div>
               </div>
             
               </div>

           
       </div>
    
        </>
     );
}

export default Homepage;