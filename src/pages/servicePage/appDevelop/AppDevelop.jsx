import './AppDevelop.scss';
import {
  Stack,
  Typography, Container
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
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation } from 'react-router-dom';
import { appCatData } from '../../../data/appCatData';
import ServiceCatCard from '../../../components/serviceCategory/ServiceCatCard';
import ServiceDemoCard from '../../../components/websiteDemoCard/ServiceDemoCard';
import PackageCard from '../../../components/packageCard/PackageCard';
import { axiosReq } from '../../../utils/axiosReq';
import LoadingBar from '../../../components/loadingBar/LoadingBar';
import Loading from '../../../components/loading/Loading';

const AppDevelop = () => {

  const { isLoading: appPackageLoading, error: apppackageErr, data: allApppackage } = useQuery({
    queryKey: ['apppackage'],
    queryFn: () => axiosReq.get('/apppackage/getall').then(res => res.data)
  });
  const { isLoading: appTemplateLoading, error: appTemplateErr, data: allAppTemplate } = useQuery({
    queryKey: ['apptemplate'],
    queryFn: () => axiosReq.get('/apptemplate/getall').then(res => res.data)
  });

  const { pathname } = useLocation();

  return (
    <div className="appDevelop">
      <div className="top">
        <span className='top-title'>App Development Solutions</span>
      </div>
      <div className="middle">
        <div className="left">
          <Link to='/service/webdev' className="service-link link" >
            <span>Website Development</span>
            <ArrowRightAltOutlined />
          </Link>
          <div className="service-link" style={{ backgroundColor: pathname === '/service/appdevelop' ? 'red' : '' }}>
            <span>App Development</span>
            <ArrowRightAltOutlined />
          </div>
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
          <img src="/app-development-image.jpg" alt="App Development" />
        </div>
      </div>

      <Container maxWidth='xl'>
        <Stack direction={'row'} justifyContent={{ xs: 'space-around', md: 'space-between' }} my={{ xs: 10, md: 15 }} flexWrap='wrap' gap={2}>
          {
            appCatData.map(s => (
              <ServiceCatCard key={s} data={s} />
            ))
          }
        </Stack>
      </Container>

      <Container maxWidth='xl'>
        <Stack mb='10rem'>
          <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.2rem' }, textAlign: 'center' }} mb={2} mt={{ xs: 10, lg: 0 }} variant='h3'>Our Creative Work</Typography>
          <Typography sx={{ fontSize: { xs: '2rem', md: '2.3rem' }, color: 'red', textAlign: 'center', fontWeight: 200, mb: 10 }} variant='h4'>Application Tamplate</Typography>
          <Stack sx={{
            flexDirection: 'row',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {
              appTemplateLoading ? <><LoadingBar /> <Loading /></> : appTemplateErr ? 'Something went wrong!' :
                allAppTemplate.map(d => (
                  <ServiceDemoCard key={d} data={d} />
                ))
            }
          </Stack>
        </Stack>
      </Container>

      <Container maxWidth='xl'>
        <Stack mb='10rem'>
          <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.2rem' }, textAlign: 'center' }} mb={2} variant='h3'>Our App Development Packages</Typography>
          <Typography sx={{ fontSize: { xs: '1.7rem', md: '2rem' }, textAlign: 'center', fontWeight: 200, color: 'red' }} variant='h4'>Get Standard App By Paying Small Budget!</Typography>
          <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} gap={{ xs: 5, md: 10 }} mt={10}>
            {
              appPackageLoading ? <><LoadingBar /> <Loading /></> : apppackageErr ? 'Something went wrong!' :
                allApppackage?.map((data, i) => (
                  <PackageCard key={i} data={data} />
                ))
            }
          </Stack>
        </Stack>
      </Container>

      <Stack className='middle2' direction={{ xs: 'column-reverse', md: 'row' }} gap={12} alignItems='center'>
        <div className="card">
          <div className="left">
            <span>Are you looking for Web Development services?</span>
            <Link to='/contact' className="btn link">CONTACT</Link>
          </div>
          <div className="right">
            <img src="/banner-one-img.png" alt="App Development" />
          </div>
        </div>
        <Stack gap={3} mt={{ xs: 10, lg: 0 }}>
          <Typography variant='h4'>App Development</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
            We specialize in creating cutting-edge mobile and web applications tailored to your business needs. Our team of experts ensures top-notch quality and performance.
          </Typography>
          <Typography variant='h5' color='red'>Turning your app ideas into reality</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
            Whether you need a native mobile app or a web-based application, we have the skills and experience to bring your vision to life.
          </Typography>
          <Typography variant='h4' mt={6}>Why Choose Us?</Typography>
          <Stack direction={{ xm: 'column', md: 'row' }} gap={3} justifyContent='space-between'>
            <Stack direction='row' alignItems='center' gap={2}>
              <AutoAwesomeOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Creative App <br /> Development</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <DoneAllOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Proven Track <br /> Record</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <CampaignOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Timely Delivery</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <div className="bottom">
        <div className="left">
          <span className='h1'>Our Benefits</span>
          <span className='span'>Experience the best in App Development from Posh Coder Agency</span>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Customized App Solutions</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>User-Centric Design</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Scalable and Secure Apps</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Continuous Support and Updates</Typography>
          </Stack>
          <div className="info">
            <div className="info-details">
              <EngineeringSharp />
              <span >Leaders in App Development</span>
            </div>
            <div className="info-details">
              <WebhookSharp />
              <span>Proven App Solutions</span>
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

export default AppDevelop;
