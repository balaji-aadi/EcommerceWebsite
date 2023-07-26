import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Register = () => {

    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/auth/register',{
                username,
                img : 'emptyperson.png',
                fullName:firstname + lastname,
                email,
                password,
                lastname,
            })
            navigate('/login')
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className='register_container'>
            <div className="register_wrapper">
                <h1 className="register_title">CREATE AN ACCOUNT</h1>
                <form className='register_form' onSubmit={handleSubmit}>
                    <input className='register_input' type="text" value={firstname} placeholder='Firstname' onChange={(e) => setFirstName(e.target.value)}/>
                    <input className='register_input' type="text" value={lastname} placeholder='Lastname' onChange={(e) => setLastName(e.target.value)}/>
                    <input className='register_input' type="text" value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
                    <input className='register_input' type="email" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
                    <input className='register_input' type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>

                    <span className='register_agreement'>
                        By creating an coount, I consent to the processing of my personal data in accordance with the 
                        <b>PRIVACY POLICY</b>
                    </span>
                    <button className='register_button'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default Register
