import { NavLink } from "react-router-dom";


import "./css/Navbar.css"
import Logo from "./img/logo.svg"

import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"

// import { FaHome, FaTasks} from "react-icons/fa"
// import { FaPeopleGroup } from "react-icons/fa6"
import { BsFillChatLeftTextFill, BsFillTelephoneOutboundFill} from "react-icons/bs"
import { MdWork } from "react-icons/md"
import { useState} from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  return (
      <nav className="nav">
    
        <div className="logocomplete">
          <img src={Logo} alt="logo" className="logo" />
          <p className="logoname"> 🪷&nbsp; Welcome &nbsp; <span>🪷 </span></p>
        </div>

        <div 
          className={`menu  ${menuOpen ? "open" : "close"}`} 
          onClick={() => {
            setMenuOpen(!menuOpen)
          }}
        >
            <span></span>
            <span></span>
            <span></span>

          <button
            className="toggle"
          >
            <span></span>
            <span></span>
            <span></span> 
          </button>
        </div>

        {menuOpen ? (
          <AiOutlineClose 
            className="close-button" 
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars 
          className="menu"
          onClick={() => setMenuOpen(true)} 
          />
        )}
        
        <div className="dropdown">
          <ul className={menuOpen ? "close" : "open"}>
          
            <div onClick={() => setMenuOpen(true)}>
            {/* <NavLink title="Home" className="elementsli" to="/"> <FaHome size={25}/> Home</NavLink> */}
            <NavLink 
              title="About" 
              className="elementsli" 
              to="/about"
              >
                <BsFillChatLeftTextFill size={25}/>&nbsp;About
            </NavLink>

            <NavLink 
              title="Work" 
              className="elementsli" 
              to="/work"
              > 
                <MdWork size={25}/>&nbsp;Work
            </NavLink>
            
            {/* <NavLink title="Projects" className="elementsli" to="/projects"> <FaTasks size={25}/> Projects</NavLink>
            <NavLink title="Testimonials" className="elementsli" to="/testimonials"> <FaPeopleGroup size={25}/> Testimonials</NavLink> */}
            
            <NavLink 
              title="Contact" 
              className="elementsli" 
              to="/contact"
              > 
                <BsFillTelephoneOutboundFill size={25}/>&nbsp; Contact
            </NavLink>
            </div>
          </ul>
          

        </div>
      </nav>
  );
};

export default Navbar;