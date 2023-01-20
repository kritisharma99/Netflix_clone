import { useEffect, useState } from "react"
import "../css/Banner.css"
import axios from "../api/axios"
import requests from "../api/Request"
const Banner=()=>{
    const[movies,setMovies] = useState([])

    const fetchMovies = async()=>{
        const request = await axios.get(requests.fetchNetflixOriginal)
        setMovies(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        )
         
    }
    useEffect(()=>{
        fetchMovies()
    },[])
    console.log("movies:",movies)
    

    //trumcate the descriptions
    function truncate(string, n){
        return string?.length>n ? string.substr(0,n-1) + "..." : string
    }


    return(
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSBmJ9i30e_MaNrkt7UwS43WLxStfhL1wpQ&usqp=CAU')`,
            backgroundPosition:"center center"
        }}>

            <div className = "banner__contents">
                <h1 className="banner__title">
                    Movie Name
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">List</button>
                </div>
                <h1 className="banner__description">
                {  truncate('This is test description.This is test description.This is test description.This is test descriptiThis is test description.This is test description.This is test description.This is test description.This is test description',30)
                }
                </h1>
            </div>
            <div className="banner__fadeBottom"></div>
            
        </header>
    )
}

export default Banner