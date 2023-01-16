import "../css/Nav.css"
import { useEffect, useState } from "react"
const HomeNav = ()=>{
    const [show,handleShow] = useState(false)

    const transitionNavBar = ()=>{
        if(window.scrollY>100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
        //clean up function
        //it is good practice to implement clean up
        //specially when we are attaching listeners
        return () =>  window.addEventListener("scroll",transitionNavBar)
    },[])

    return(
        <div className={`nav ${show && 'nav__black'}`}>
            {/* BAM naming convention css classes */}
            <div className="nav__content">
                <img className="nav__logo"
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt=""/>
                <img className="nav__avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvEnLacTmiOPneb1HnzYT48ZSDDCllS4QMg&usqp=CAU" alt="avatar_logo"/>
               
            </div>
        </div>
    )
}
export default HomeNav