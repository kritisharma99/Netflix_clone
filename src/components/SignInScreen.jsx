import "../css/SignInScreen.css"
import {useRef} from "react"
import {auth} from "/Users/monarch/Documents/reactcrashcourse/udemy_react/netflix_build/src/firebase.js"

function SignInScreen(){
    //use of useRef
    //to take data from input field
    const emailRef = useRef(null)
    const passRef = useRef(null)


    const register =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value,
        ).then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    const signin = (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value,
        )
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=>{
            alert(error.message)
        })


    }
    return(
        <div className="signInScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email Address"/>
                <input ref={passRef} type="password" placeholder="Password"/>
                <button type="submit" className="signIn_btn" onClick={signin}>Sign In</button>

                <h4>
                    <span className="signinScreen__gray">New to Netflix? </span> 
                    <span className="signinScreen__link" onClick={register}>Sign up now.</span></h4>
            </form>
        </div>
    )
}

export default SignInScreen