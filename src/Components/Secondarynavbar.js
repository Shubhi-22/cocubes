import React from "react";
import "./Secondarynavbar.css";

const Secondarynavbar=()=>{
    return <>
    <div className="container-flluid">
        <div className="row ">
        <nav className="navbar navbar-sec-container">
            <div className="logo"><span className="title"><h1>ShopKart</h1></span></div>
           <ul>
            <li className="nav-item">wishlist(0)</li>
            <li className="nav-item">bag(0)</li>
           </ul>
        </nav>
        </div>
        
       </div>
    </>

}

export default Secondarynavbar;