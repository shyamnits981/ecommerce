import React, { useEffect,useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import axios from 'axios'
import './Navbar.css';
const Navbar = ()=>{
  const[click, setClick] = useState(false);
  const handleClick = ()=> setClick(!click)

  const[loading, setLoading] = useState(false)
  const[posts, setPosts] = useState([])
  const[search , setSerach]= useState("");

  useEffect(()=>{
    const loadpost = async()=>{
      setLoading(true)
      const respone = await axios.get("https://rapidapi.com/category/eCommerce")
        setPosts(respone.data);
        setLoading(false);
    }
    loadpost();
  },[]);

    return(
        <div>
        <div className='navbar'>
            <div className='container'>
                <h1><span> <img src='https://images.unsplash.com/photo-1548645933-c62d4468cbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="logo" className='logo'></img>Ecommerce</span></h1>

                <form className="search">
            <input className="searchs" type="text" placeholder="Search product" onChange={(e)=>setSerach(e.target.value)} />
        
                  </form>
                 <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li><a href='#'>Log In</a></li>   
                 </ul>
                 <button className='btn2'> Sign In</button>
                 <div className='hameburger' onClick={handleClick}>
                   <FiAlignJustify className='icon'/>
                 </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar