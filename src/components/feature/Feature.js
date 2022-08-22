import React  from "react";
import './Feature.css'
import E1 from '../../assets/p1.avif'
import E2 from '../../assets/p2.avif'
import E3 from '../../assets/p3.avif'
import E4 from '../../assets/p4.webp'
import E5 from '../../assets/p5.avif'
import P1 from '../../assets/p21.webp'
import P2 from '../../assets/p22.jpg'
import P3 from '../../assets/p23.webp'
import P4 from '../../assets/p24.jpg'


 const Feature =()=>{
    return(
        <div className="feature">
            <h1>Top quility products</h1>
            <div className="container">
                <img src={E1} alt=''/>
                <img src={E2} alt=''/>
                <img src={E3} alt=''/>
                <img src={E4} alt=''/>
                <img src={E5} alt=''/>

                <div className="span-3  img-details">
                    <div className="top">
                        <h2>Electronic</h2>
                        <p>TV</p>
                        <p className="price">rs 700</p>
                    </div>
                </div>
                <div className="span-2 right-img-detalis">
                    <p>Good product</p>
                    <button className="btn">View Listing</button>
                </div>
            </div>




            <div className="container">
                <img src={P1} alt=''/>
                <img src={P2} alt=''/>
                <img src={P3} alt=''/>
                <img src={P4} alt=''/>
           

                <div className="span-3  img-details">
                    <div className="top">
                        <h2>Electronic</h2>
                        <p>TV</p>
                        <p className="price">rs 700</p>
                    </div>
                    <div className="info-grid">
                        <div>
                            

                           

                        </div>

                    
                            
                        </div>
                    </div>
                </div>
                <div className="span-2 right-img-detalis">
                    <p>Good product</p>
                    <button className="btn">View Listing</button>
                </div>
            </div>

        
    )
}

export default Feature;