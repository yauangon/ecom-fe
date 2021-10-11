import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./index.css"

import Register from "../popupAuth/popupRegister.js";
import Login from "../popupAuth/popupLogin.js"
import { useDispatch } from "react-redux";
import { signout } from "../../redux/auth.redux";

const HomePage = props => {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false) 
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    const dispatch = useDispatch()

    

    const toggleRegisterPopup = () => {
        if (isLoginOpen) setIsLoginOpen(false)
        setIsRegisterOpen(!isRegisterOpen)
        return;
    }

    const toggleLoginPopup = () => {
        if (isRegisterOpen) setIsRegisterOpen(false)
        setIsLoginOpen(!isLoginOpen)
        return;
    }

    const loginToRegister = () => {
        if (!isLoginOpen) toggleRegisterPopup();
        else {
            setIsLoginOpen(false)
            setIsRegisterOpen(true)
        }
    }

    const registerToLogin = () => {
        if (!isRegisterOpen) toggleRegisterPopup();
        else {
            setIsLoginOpen(true)
            setIsRegisterOpen(false)
        }
    }

    const logout = () =>{
        dispatch(signout())
    }

        return (
                <div>
                    <button type="button" onClick={toggleRegisterPopup}>Register</button>
                    {
                        isRegisterOpen && <Register handleClose={toggleRegisterPopup} handleChange={registerToLogin} />
                    }
                    <button type="button" onClick={toggleLoginPopup}>Login</button>
                    {
                        isLoginOpen && <Login handleClose={toggleLoginPopup} handleChange={loginToRegister} />
                    }
                    <Link to="/logindash"><button type="button">Login Dash</button></Link>
                    <button type="button" onClick={logout}>Log out</button>
                    {/* <p className="fill-page"><object data="./images/text.txt" className="fill-page"></object></p>
                    <p className="fill-page"><object data="./images/text.txt" className="fill-page"></object></p>
                    <p className="fill-page"><object data="./images/text.txt" className="fill-page"></object></p>
                    <p className="fill-page"><object data="./images/text.txt" className="fill-page"></object></p>
                    <p className="fill-page"><object data="./images/text.txt" className="fill-page"></object></p>
                    <p className="fill-page"><object data="./images/text.txt" className="fill-page"></object></p> */}
                </div>  
        )
}

export default HomePage;