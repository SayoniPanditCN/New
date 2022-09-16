import axios from "axios";
import {React, useState, useEffect } from "react";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AllRoutes = () => {

    const User = false

    // useEffect(() => {
    //     const Head = {
    //         Accept : "application/json",
    //         "Content-Type" : "application/json",
    //         "Access-Control-Allow-Credentials": true
    //     }
    //   axios
    //   .get("http://localhost:5000/auth/login/success/")
    // }, [])


    

    const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        // credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "*",
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);


    return (
        <div className="AllRoutes">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ 
                        <Navbar User={User}>
                          <Login/>
                        </Navbar>
                    } />
                    <Route path="/Login" element={
                        <Navbar User={User}>
                          <Login/>
                        </Navbar>
                        
                    } />
                    <Route path="/Home" element={
                    <Navbar User={User}>
                       <Home/>
                    </Navbar>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AllRoutes;