import React from "react";
import { useEffect } from "react";
import axios from "axios"

const Navbar = ({children, User}) => {

   

    return(
        <div>
        <div className="NavHead">
            <div className="AppName">My App</div>
            <div className="Menu">
                <div>Login</div>
                <div>{User}</div>
                <div>Logout</div>
            </div>
           
        </div>
        {children}
        </div>
    )
}
export default Navbar;