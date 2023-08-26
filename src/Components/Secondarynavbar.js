import React from "react";
import "./Secondarynavbar.css";
import Dynamicnavbar from "./dynamicnavbar";


const Secondarynavbar=()=>{
    return <>
    <div className="container-fluid">
        <div className="row ">
        <nav className="navbar navbar-sec-container">
            <div className="logo"><span className="title"><h1>ShopKart</h1></span></div>
            <div className="secondary-menu">
           <ul>
            <li className="nav-item">wishlist(0)</li>
            <li className="nav-item">bag(0)</li>
           </ul>
           </div>
           <div className="hr"></div>
           <Dynamicnavbar/>
           <div className="bigstar"></div>
           <div className="person"></div>
           <div className="rectangle"></div>
           <div className="Fresh"></div>
           <div className="year"></div>
           <div className="Look"></div>
           <div className="line-2"></div>
           <div className="star"></div>
           <div className="see-more"></div>
           <div className="product"><span className="name">OREGON JACKET</span><br/><span className="price">$124</span></div>
        </nav>
        </div>
        
       </div>
    </>

}

export default Secondarynavbar;