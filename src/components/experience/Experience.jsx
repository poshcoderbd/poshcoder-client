import './Experience.scss';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Link } from 'react-router-dom';
import { SlideAnimation } from '../animations/animations';

const Experience = () => {
  return (
    <div className="experience">
      <div className="left">
        <div className="left-container">
          <SlideAnimation direction='up'>
            <div className='h4'>About Posh Coder</div>
            <div className='experience-h1'>We drive experiences for brands with purpose.</div>
            <p>We're west coast change-makers, in a complex world. The brands we support are positioned to be purposeful and powerful while also fluid.</p>
            <div className="experience-skills">
              <div className="item">
                <TrendingFlatIcon />
                <span>Creating with a Special or Unique Process</span>
              </div>
              <div className="item">
                <TrendingFlatIcon />
                <span>A Radical Change</span>
              </div>
              <div className="item">
                <TrendingFlatIcon />
                <span>Possessing Special Skill or Knowledge</span>
              </div>
            </div>
            <Link to='/service' className="read-more link">Read More<TrendingFlatIcon /></Link>
          </SlideAnimation>
        </div>
      </div>
      <div className="right">
        <SlideAnimation direction='right'>
        <img src="/abt1.jpg" alt="" />
        </SlideAnimation>
      </div>
    </div>
  )
}

export default Experience