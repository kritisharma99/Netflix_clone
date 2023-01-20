import React from "react";
import Banner from "./Banner";
import "./HomeNav"
import HomeNav from "./HomeNav";
import Row from "./Row";
import requests from "../api/Request";


const HomeScreen=()=>{
    return(
        <div className="homeScreen">
            {/* Nav */}
            <HomeNav/>

            {/* Banner */}
            <Banner/>

            {/* Row */}
            <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginal} isLarge/>
            <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginal} />
            <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginal} />
            <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginal} />
        </div>
    )
}

export default HomeScreen