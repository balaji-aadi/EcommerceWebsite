import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import {Link} from 'react-router-dom'

const Newsletter = () => {
  return (
    <div className='nl_container'>
      <h1 className="nl_title">Newsletter</h1>
      <div className="nl_desc">Get timely updates from your favorite products. </div>
      <div className="nl_inputContainer">
        <input type="email" placeholder='Enter Your Email' className='nl_input'/>
        <Link to={ 'mailto: balajiaadi2000@gmail.com'}><button  className='nl_btn' ><SendIcon/> </button></Link>
      </div>
    </div>
  )
}

export default Newsletter
