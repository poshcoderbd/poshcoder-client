import './Business.scss';
import {
  Stack,
  Typography
} from '@mui/material';
import {
  ArrowRightAltOutlined,
  AutoAwesomeOutlined,
  CampaignOutlined,
  CheckCircle,
  DoneAllOutlined,
  EngineeringSharp,
  WebhookSharp
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Business = () => {
  const { pathname } = useLocation();

  return (
    <div className="marketing">
      <div className="top">
        <span className='top-title'>Online Business Solutions</span>
      </div>
      <div className="middle">
        <div className="left">
          <Link to='/service/webdev' className="service-link link" >
            <span>Website Development</span>
            <ArrowRightAltOutlined />
          </Link>
          <Link to='/service/appdevelop' className='link'>
            <div className="service-link">
              <span>App Development</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
          <Link to='/service/marketing' className='link'>
            <div className="service-link" style={{ backgroundColor: pathname === '/service/marketing' ? 'red' : '' }}>
              <span>Digital Marketing</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
          <Link to='/service/graphic' className='link'>
            <div className="service-link" style={{ backgroundColor: pathname === '/service/graphic' ? 'red' : '' }}>
              <span>Graphic Designing</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
          <Link to='/service/content' className='link'>
            <div className="service-link">
              <span>Content Writing</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
        </div>
        <div className="right">
          <img src="/services-details-marketing.jpg" alt="Digital Marketing" />
        </div>
      </div>

      <Stack className='middle2' direction={{ xs: 'column-reverse', md: 'row' }} gap={12} alignItems='center'>
        <div className="card">
          <div className="left">
            <span>Are you looking for Graphic Designing services?</span>
            <Link to='/contact' className="btn link">CONTACT</Link>
          </div>
          <div className="right">
            <img src="/banner-one-img.png" alt="Digital Marketing" />
          </div>
        </div>
        <Stack gap={3}>
          <Typography variant='h4'>Online Business Solutions</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
            Our online business solutions are designed to help you establish and grow your business on the internet. We specialize in creating and implementing effective strategies that drive online success.
          </Typography>
          <Typography variant='h5' color='red'>Maximizing Your Online Presence</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
          We leverage the latest techniques to help you achieve your business goals. Our team is dedicated to delivering results and maximizing your online impact.
          </Typography>
          <Typography variant='h4' mt={6}>Why Choose Us?</Typography>
          <Stack direction={{ xm: 'column', md: 'row' }} gap={3} justifyContent='space-between'>
            <Stack direction='row' alignItems='center' gap={2}>
              <AutoAwesomeOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Creative Solutions</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <DoneAllOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Timely Solutions</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <CampaignOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Timely <br /> Campaigns</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <div className="bottom">
        <div className="left">
          <span className='h1'>Our Benefits</span>
          <span className='span'>Experience the best in Online Business Solutions from Posh Coder Agency</span>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Creative and Effective Solutions</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Customized Strategies</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Enhanced Online Visibility</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Measurable Success</Typography>
          </Stack>
          <div className="info">
            <div className="info-details">
              <EngineeringSharp />
              <span >Leaders in Online Business Solutions</span>
            </div>
            <div className="info-details">
              <WebhookSharp />
              <span>Proven Online Strategies</span>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="/services-details-benefit-img.jpg" alt="Our Benefits" />
        </div>
      </div>
    </div>
  )
}

export default Business;
