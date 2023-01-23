import "../css/LoginScreen.css"
import {useState} from "react"
import SignInScreen from "../components/SignInScreen"

function Login(){

    const [signIn, setSignIn] = useState(false)
    return(
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                className="loginScreen__logo" 
                src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt="login background"/>
                <button className="loginScreen__Btn" 
                onClick={()=>setSignIn(true)}> Sign In</button>
                
            </div>
            <div className="loginScreen__gradient"/>
            <div className="loginScreen__body">
                {signIn ? (
                    <SignInScreen/>
                ) : 
                (
                    <>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen__input">
                        <form>
                            <input type="email" id="email_login" placeholder="Email Address"/>
                            <button className="loginScreen__getStarted">Get Started  </button>
                        </form>
                    </div>

                    </>

                )}
                
                
            </div>
        </div>
    )
}

export default Login