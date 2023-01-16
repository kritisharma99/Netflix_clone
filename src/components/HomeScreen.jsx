import React from "react";
import Banner from "./Banner";

import "./HomeNav"
import HomeNav from "./HomeNav";
const HomeScreen=()=>{
    return(
        <div className="homeScreen">
            {/* Nav */}
            <HomeNav/>

            {/* Banner */}
            <Banner/>

            {/* Row */}
        </div>
    )
}

export default HomeScreen