/* eslint-disable react/react-in-jsx-scope */
import './Marketing.scss';
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

const Marketing = () => {
  const { pathname } = useLocation();

  return (
    <div className="digital-marketing">
      <div className="top">
        <span className='top-title'>Digital Marketing Solutions</span>
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
        <Stack gap={3} mt={{ xs: 10, lg: 0 }}>
          <Typography variant='h4'>Digital Marketing</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
            Our digital marketing services are designed to boost your online presence and drive business growth. We specialize in creating and implementing effective marketing strategies that reach your target audience.
          </Typography>
          <Typography variant='h5' color='red'>Maximizing your online reach and impact</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
            We use the latest digital marketing techniques to help you achieve your business goals. Our team is dedicated to delivering results and maximizing your return on investment.
          </Typography>
          <Typography variant='h4' mt={2}>Why Choose Us?</Typography>
          <Stack direction={{ xm: 'column', md: 'row' }} gap={3} justifyContent='space-between'>
            <Stack direction='row' alignItems='center' gap={2}>
              <AutoAwesomeOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Creative Marketing <br /> Strategies</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <DoneAllOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Proven Results <br /> Record</Typography>
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
          <Stack sx={{ color: '#fff' }}>
            <Typography variant="h5" my={2} fontWeight="bold">
              What We Offer:
            </Typography>

            <Stack direction="column" gap={2} sx={{ lineHeight: 1.7, color: '#C0C7C7' }}>
              <Typography variant="body1">
                - **Search Engine Optimization (SEO)**: Improve your website’s visibility and rank higher in search results.
              </Typography>
              <Typography variant="body1">
                - **Social Media Management**: Engage with your audience across all platforms with curated content.
              </Typography>
              <Typography variant="body1">
                - **Pay-Per-Click Advertising (PPC)**: Drive targeted traffic to your website with high-conversion ads.
              </Typography>
              <Typography variant="body1">
                - **Email Marketing**: Craft personalized email campaigns that nurture leads and boost sales.
              </Typography>
              <Typography variant="body1">
                - **Content Marketing**: Build authority in your industry with value-driven content that resonates with your audience.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <div className="bottom">
        <div className="left">
          <span className='h1'>Our Benefits</span>
          <span className='span'>Experience the best in Digital Marketing from Posh Coder Agency</span>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Creative and Targeted Campaigns</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Customized Marketing Solutions</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Increased Brand Visibility</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Measurable ROI (Return on Investment)</Typography>
          </Stack>
          <div className="info">
            <div className="info-details">
              <EngineeringSharp />
              <span >Leaders in Digital Marketing</span>
            </div>
            <div className="info-details">
              <WebhookSharp />
              <span>Proven Marketing Strategies</span>
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

export default Marketing;
