import './Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="top">
            <div className="logo">
              <img src="/logo.png" alt="" />
            </div>
            <div className="icons">
              <a href="https://www.facebook.com/poshcoderbd" target='blank' className='link'><FacebookIcon /></a>
              <a href="https://www.linkedin.com/company/posh-coder/" target='blank' className='link'><LinkedInIcon /></a>
              <a href="https://www.instagram.com/poshcoderbd" target='blank' className='link'><Instagram /></a>
              <a className='link' href="mailto: poshcoderbd@gmail.com"><EmailIcon /></a>
              <a className='link' href="tel: 01790862914"> <PhoneIcon /></a>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <h4>Let's start working together</h4>
              <h1><Fade cascade damping={.1} triggerOnce>poshcoderbd@gmail.com</Fade></h1>
              <h2><Fade cascade damping={.1} triggerOnce delay={5}>Phone : 01790 862914</Fade></h2>
            </div>
            <div className="right">
              <div className="right1">
                <h1>Services</h1>
                <Link to='/service/content' className='link f-link'>Content Creation and Design</Link>
                <Link to='/service/webdev' className='link f-link'>Web Design & Development</Link>
                <Link to='/service/appdevelop' className='link f-link'>Mobile App Development</Link>
                <Link to='/service/graphic' className='link f-link'>Graphic Design and Branding</Link>
                <Link to='/service/marketing' className='link f-link'>Digital Marketing</Link>
              </div>
              <div className="right2">
                <h1>Contact Us</h1>
                <span>Bashundhara Residential Area, Dhaka, Bangladesh, 1229</span>
                <span>Phone : +88 01790-862914</span>
                <span>E-Mail : poshcoderbd@gmail.com</span>
                <span>Working Hours : 8hrs</span>
              </div>
            </div>
          </div>
          <span className='copyright'>© Copyrights 2023 Posh Coder All rights reserved. Developed and Maintained by Posh Coder.</span>
        </div>
      </div>
    </>
  )
}

export default Footer