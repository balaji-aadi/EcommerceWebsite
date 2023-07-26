import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import axios from 'axios'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  const productQuantity = useSelector(state => state.cart.productQuantity)

  const currentUser = useSelector(state => state.user.currentUser)


  const handleLogout = () => {
    axios.post('http://localhost:5000/api/auth/logout', {} , {withCredentials:true})
    localStorage.removeItem('persist:root')
    window.location.reload();
  }


  return (
    <div className='nav_container'>

      <div className='nav_wrapper'>
        <div className='nav_left'>
          <span className='nav_language'>EN</span>
          <div className="searchContainer">
            <SearchIcon style={{ color: "gray", fontSize: "20px" }} />
            <input type="text" className='nav_input' placeholder='Search for products, brands and more' />
          </div>
        </div>

        <div className='nav_center'>
          <Link to={'/'}><img src="/logo2.png" alt="" className='logo' /></Link>
        </div>

        <div className='nav_right'>
          {/* <div className="wishlist"><Link><FavoriteBorderIcon/> </Link></div> */}
          {currentUser ? <div><Link><PersonIcon style={{color: "maroon"}}/></Link> </div> : ""}
          <div style={{textTransform: "capitalize","color" : "Highlight"}}>{currentUser?.username}</div>
          {currentUser ? "" : <div className="menuItem"><Link to={'/register'} style={{textDecoration : "none", "color" : "black"}}>REGISTER</Link></div>}
          {currentUser ? <div className="menuItem" onClick={handleLogout}>LOGOUT</div>:<div className="menuItem"><Link to={'/login'} style={{textDecoration : "none","color" : "black"}}>SIGN IN</Link></div>}
          <Link to={'/cart'}>
            <div className="menuItem">
              <IconButton aria-label="cart">
                <Badge badgeContent={productQuantity} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </div>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Navbar
