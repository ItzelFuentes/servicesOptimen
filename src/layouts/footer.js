import React from "react";
import facebook from '../img/footer/facebook.png';
import linkedin from '../img/footer/linkedin.png';
import twitter from '../img/footer/twitter.png';
import tiktok from '../img/footer/tik-tok.png';


const footer = () => {
  return (
    <div id="pie">
    <footer style={{ backgroundColor: '#4169E1', padding: '0.4rem', fontSize:"17px"}}>
            <div className="footer1">
        <div className="footer2">
            <div className="footer3" >
            <p style={{color:"white"}}>Work with us</p>
            </div>
            <div className="footer3">
            <p style={{color:"white"}}>Go back up</p>
            </div>
            <div className="footer3">
            <p style={{color:"white"}}>Security politics</p>
            </div>
        </div>
        <div className="footer2">
            <div className="footer3">
            <p></p>
            </div>
            <div className="footer3">
            <p style={{color:"white"}}>Login</p>
            </div>
            <div className="footer3">
            <p><div className='redes'>
                <img src={facebook}  width="30" height="30" alt=""/>
                <img src={linkedin} width="30" height="30"  alt=""/>
                <img src={twitter} width="30" height="30"  alt=""/>
                <img src={tiktok} width="30" height="30"  alt=""/>
            </div></p>
            </div>
        </div>
        <div className="footer2">
            <div className="footer3">
            <p style={{color:"white"}}>Phone: +52 (477) 7173339 | Email: info@optimen.com.mx</p>
            </div>
            <div className="footer3">
            <p style={{color:"white"}}>© 2023 Creado OPTIMEN</p>
            </div>
            <div className="footer3">
            <p style={{color:"white"}}>Av. León 119 | León, Guanajuato | Mexico</p>
            </div>
        </div>
        </div>
       
    </footer>
    
    </div>
      
  )
}

export default footer
