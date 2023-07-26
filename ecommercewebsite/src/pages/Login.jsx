import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../Redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.user)


    const handleSubmit = (e) => {
        e.preventDefault()
        login(dispatch, {username, password},{Credential: true});
        
    }

    return (
        <div className='login_container'>
            <div className="login_wrapper">
            {error && <p> Incorrect username or password.</p>}
                <h1 className="login_title">SIGN IN</h1>
                <form className='login_form' onSubmit={handleSubmit} >
                    <input className='login_input' type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input className='login_input' type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='login_button'>LOGIN</button>
                    <div className='login_links'>
                        <span>New to ThugProducts? <Link to={'/register'}>Create an account.</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
