import React from "react";
import "./Topnav.css";

const Topnav=()=>{
    return(
       <div className="container-flluid">
        <div className="row ">
        <nav className="navbar navbar-container">
            <div className="top-nav-left">            
            <ul >
                <li className="nav-item"><i className="fa-solid fa-truck delivery-icon "  ></i></li>
                <li className="nav-item">Free Delivery</li>
                <li className="nav-item"><div className="line"></div></li>
                <li className="nav-item">Return Policy</li>
            </ul>
            </div>
            <div className="top-nav-right">
                <ul>
                    <li className="nav-item">Login</li>
                    <li className="nav-item">Follow Us</li>
                    <li className="nav-item"><i className="fa-brands fa-facebook-f"></i></li>
                    <li className="nav-item"><i className="fa-brands fa-linkedin-in"></i></li>
                    <li className="nav-item"><i className="fa-brands fa-twitter"></i></li>
                    <li className="nav-item"><i className="fa-brands fa-instagram"></i></li>
                </ul>
            </div>
        </nav>
        </div>
        
       </div>
    )
}

export default Topnav;