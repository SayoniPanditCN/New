import React from 'react'

const Login = () => {

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }

    return(
        <div>
            <div><h1>Choose a login method</h1></div>
            <button onClick={google}>Google</button>
            <button>Facebook</button>
            <button>Github</button>
        </div>
    )
}
export default Login