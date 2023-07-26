import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer_left'>
                <Link to={'/'}><img src="/logo2.png" alt="" className='footer_logo' /></Link>
                <p className="footer_desc">

                    <span style={{ fontWeight: "bolder" }}>100% ORIGINAL guarantee </span>  for all products at aadi Shop.com <br />

                    <span style={{ fontWeight: "bolder" }}>Return within 14days</span> of receiving your order<br />

                    <span>© 2023 www.aadi shop.com. All rights reserved.</span>
                </p>
                <div className="footer_socialContainer">
                    <div className="footer_socialIcon " style={{ backgroundColor: "#3B5999" }}>
                        <Link><FacebookIcon /></Link>
                    </div>
                    <div className="footer_socialIcon" style={{ backgroundColor: "#55ACEE" }}>
                        <Link><TwitterIcon /></Link>
                    </div>
                    <div className="footer_socialIcon" style={{ backgroundColor: "#E4405F" }}>
                        <Link><InstagramIcon /></Link>
                    </div>
                    <div className="footer_socialIcon" style={{ backgroundColor: "rgb(65, 156, 187)" }}>
                        <Link><LinkedInIcon /></Link>
                    </div>
                </div>
            </div>

            <div className="footer_center">
                <h1 className="footer_title">Useful Links</h1>
                <ul className="footer_list">
                    <li className="footer_listItem"> <Link to={'/'} >Home </Link> </li>
                    <li className="footer_listItem"> <Link to={'/cart'}>Cart </Link> </li>
                    <li className="footer_listItem"> <Link to={'/products/men'}>Men Fashion </Link></li>
                    <li className="footer_listItem"> <Link to={'/products/women'}>Women Fashion </Link></li>
                    <li className="footer_listItem"> <Link to={'/products/accessories'}>Accessories </Link></li>
                    <li className="footer_listItem"> <Link>My Account </Link></li>
                    <li className="footer_listItem"> <Link to={'/order'}>Order Tracking </Link></li>
                    <li className="footer_listItem"> <Link>Wishlist </Link></li>
                    <li className="footer_listItem"> <Link to={'/Terms'}>Terms </Link></li>

                </ul>
            </div>


            <div className="footer_right">
                <h1 className="footer_contactTitle">Contact</h1>
                <div className="footer_contactItem">
                    <LocationOnIcon style={{ marginRight: "10px" }} /> Buildings Asia,
                    Begonia and Clover situated in Embassy Tech Village,
                    Outer Ring Road,
                    Varthur Hobli,
                    Bengaluru – 560103, India
                </div>
                <div className="footer_contactItem">
                    <LocalPhoneIcon style={{ marginRight: "10px" }} />
                    +91 7804946631
                </div>
                <div className="footer_contactItem">
                    <EmailIcon style={{ marginRight: "10px" }} />
                    <Link style={{ textDecoration: "none", color: "black" }}>balajiaadi2000@gmail.com</Link>
                </div>
            </div>
            <img src="" alt="" className='payment' />
        </div>
    )
}

export default Footer
