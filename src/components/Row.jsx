import { useState,useEffect } from "react"
import "../css/Row.css"
import axios from "../api/axios"

function Row({title,fetchUrl,isLarge=false}){

    const [moviess,setMoviess] = useState([])
    const base_url = "https://image.tmdb.org/t/p/w500"
    const fetchData = async() =>{
        const request = await axios.get(fetchUrl);
        setMoviess(request.data.results)
        return request;
    }
    useEffect(()=>{
        fetchData();
    },[fetchUrl])

    console.log(moviess)
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {moviess.map(m=>(
                    //Dead link uissue - timeline : 1:26:21
                    <img className={`row__poster ${isLarge && 'row__posterLarge'}`} 
                    key={m.id}
                    // src={`${base_url}${m.poster_path}`}
                    src={`${base_url}${
                        isLarge ? m.poster_path : m.backdrop_path
                    }`} 
                    alt={m.name}/>
                ))}
            </div>
            
        </div>
    )
};

export default Row