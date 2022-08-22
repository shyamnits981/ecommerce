import React from "react";
import './Hero.css'
import { IoIosKeypad } from "react-icons/io";
import Apr1 from '../../assets/p1.avif'
import E2 from '../../assets/p2.avif'
import E3 from '../../assets/p3.avif'
import E4 from '../../assets/p4.webp'
import E5 from '../../assets/p5.avif'
import P1 from '../../assets/p21.webp'
import P2 from '../../assets/p22.jpg'
import P3 from '../../assets/p23.webp'
import P4 from '../../assets/p24.jpg'


const Hero = () => {
    return (
        <div>


            <div className="hero">


                <div className="content">
                    <h1>eCommerce Products</h1>
                    <form className="search">
                        <input type="text" placeholder="Search products" className="search" />
                    </form>
                </div>
            </div>

            <div className="cointner">
                <aside className="sidebar">
                    <h5>Collections</h5>
                    <p className="p"><a href="#">Electronic</a></p>
                    <p className="p"> <a href="#">House Decoration Metarial</a></p>
                    <p className="p"><a href="#">Books</a></p>
                    <p className="p" ><a href="#">Pens</a></p>
                    <p className="p"> <a href="#">Mens Feshions</a></p>
                    <p className="p"> <a href="#"><IoIosKeypad /> View All Category</a></p>


                    <h5>Categorys</h5>

                    <p className="p"> <a href="#">Data</a></p>
                    <p className="p"> <a href="#">Sports</a></p>
                    <p className="p"> <a href="#">Finance</a></p>
                    <p className="p"> <a href="#">Travel</a></p>
                    <p className="p"> <a href="#">Entertainment</a></p>
                    <p className="p"> <a href="#"><IoIosKeypad /> View All Category</a></p>

                </aside>
                <main className="main">
                  <h1>All Products</h1>
                  <div >
                    <p><span className="bold">All</span></p>
                    <p>Electronic</p>
                    <p>House Decoration Metarial</p>
                    <p>Books</p>
                    <p>Pens</p>
                    <p>Mens Feshions</p>
                  </div>
                  <div className="cointner">
                   
                    <img src={E2} alt='' />
                    <img src={E3} alt='' />
                 
                  </div>
                 


                </main>

            </div>


        </div>
    )
}

export default Hero;