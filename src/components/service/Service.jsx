import './Service.scss';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DifferenceIcon from '@mui/icons-material/Difference';
import WebIcon from '@mui/icons-material/Web';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { ArrowRightAlt, TrendingFlat } from '@mui/icons-material';
import { FadeAnimation } from '../animations/animations';

const Service = () => {
  return (
    <div className="service">
      <div className="top" id='service'>
        <h1 className='our-service'>
          <FadeAnimation damping={0.1} cascade={'cascade'} >Our Services</FadeAnimation>
        </h1>
      </div>
      <div className="bottom">
        <FadeAnimation damping={0.1} cascade={'cascade'}>
          <div className="service-card">
            <div className="card-top">
              <span>01</span>
              <BusinessCenterIcon />
            </div>
            <div className="card-bottom">
              <span className='card-title'>Online Business<br />Creation</span>
              <p>We create online platforms according to your business requirements.</p>
              <Link to='/service/business' className='details-btn link'>Read Details </Link>
            </div>
          </div>
          <div className="service-card">
            <div className="card-top">
              <span>02</span>
              <DifferenceIcon />
            </div>
            <div className="card-bottom">
              <span className='card-title'>Content Creation and<br />Design</span>
              <p>We create content for your website and other social media accounts.</p>
              <Link to='/service/content' className='details-btn link'>Read Details </Link>
            </div>
          </div>
          <div className="service-card">
            <div className="card-top">
              <span>03</span>
              <WebIcon />
            </div>
            <div className="card-bottom">
              <span className='card-title'>Website Design and<br />Development</span>
              <p>We develop websites for your business that you can customize as you want.</p>
              <Link to='/service/webdev' className='details-btn link'>Read Details </Link>
            </div>
          </div>
          <div className="service-card">
            <div className="card-top">
              <span>04</span>
              <AddBusinessIcon />
            </div>
            <div className="card-bottom">
              <span className='card-title'>Online Marketing and<br />SEO</span>
              <p>We provide online marketing and SEO services.</p>
              <Link to='/service/marketing' className='details-btn link'>Read Details </Link>
            </div>
          </div>
          <div className="service-card">
            <div className="card-top">
              <span>05</span>
              <AppShortcutIcon />
            </div>
            <div className="card-bottom">
              <span className='card-title'>Software Design and<br />Development</span>
              <p>We develop software to make your business easier and faster to manage.</p>
              <Link to='/service/appdevelop' className='details-btn link'>Read Details </Link>
            </div>
          </div>
          <div className="service-card">
            <div className="card-top">
              <span>06</span>
              <BubbleChartIcon />
            </div>
            <div className="card-bottom">
              <span className='card-title'>Graphic Design and<br />Branding</span>
              <p>We design brand identity elements like company logos, poster, ads etc.</p>
              <Link to='/service/graphic' className='details-btn link'>Read Details </Link>
            </div>
          </div>
          <Link to='service' className='read-more link'>Service Details <TrendingFlat /></Link>
        </FadeAnimation>
      </div>
    </div>
  )
}

export default Service;
