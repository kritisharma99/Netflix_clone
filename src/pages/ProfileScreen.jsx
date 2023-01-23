import { useSelector } from "react-redux"
import HomeNav from "../components/HomeNav"
import PlanScreen from "../components/PlanScreen";
import "../css/ProfileScreen.css"
import { selectUser } from "../features/userSlice"
import { auth } from '../firebase';

function ProfileScreen(){
const user = useSelector(selectUser)

    return(
        <div className="profileScreen">
            <HomeNav/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvEnLacTmiOPneb1HnzYT48ZSDDCllS4QMg&usqp=CAU" alt=""/>
                
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <PlanScreen/>
                        <button onClick={()=>auth.signOut()}
                        className="profileScreen__Signout">Sign Out</button>
                    </div>
                </div>
                </div>
            </div>
            Profile
        </div>
    )
}

export default ProfileScreen