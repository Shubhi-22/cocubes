import React from "react";
import TopNav from "../Components/Topnavbar";
import Secondarynavbar from "../Components/Secondarynavbar";
// import fotter from "../Components/footer";
import Contact from "../Components/Contact";
import Foot from "../Components/foot";
import Body from "../Components/body";

const Homepage = () =>{
    return(
        <>
        <TopNav/>
        <Secondarynavbar/>  
        <Body/>
        <Contact/>  
        <Foot/>  
        {/* <fotter/>   */}
        </>
    )
}

export default Homepage;