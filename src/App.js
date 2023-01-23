import React, { useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux"
import { login, logout, selectUser } from './features/userSlice';

function App() {
  // const user = null
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  // const history = useHistory()



  useEffect(()=>{
    //onAuthStateChanged - it is a type of. event listener
    // it is good habit to write clean up functn whenever event listener
    //used in useEffect()

    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //Logged in
        // console.log("logged in :",userAuth)
        //in login user is initialized to action.payload

        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,

        }));
      }
      else{
        //Logged out
        dispatch(logout());
      }
    })
    return () =>{
      unsubscribe(); //detach the listener
    }
  },[dispatch])
  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login/>
        ):(
          <div className='container'>
          {/*  */}
          <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route path="/profile" element={<ProfileScreen/>}/>
            {/* <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} /> */}
          </Routes>
        </div>

        )}
        
      </Router>
    </div>
  );
}

export default App;
