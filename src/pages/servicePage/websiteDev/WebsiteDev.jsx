/* eslint-disable react/react-in-jsx-scope */
import './WebsiteDev.scss';
import {
  Box,
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
import PackageCard from '../../../components/packageCard/PackageCard';
import BlogCard from '../../../components/blogCard/BlogCard';
import { webCatData } from '../../../data/webCatData';
import { webPackageData } from '../../../data/webPackageData';
import { webTemplateData } from '../../../data/webTamplateData';
import ServiceCatCard from '../../../components/serviceCategory/ServiceCatCard';
import ServiceDemoCard from '../../../components/websiteDemoCard/ServiceDemoCard';
import { axiosReq } from '../../../utils/axiosReq';
import { useQuery } from '@tanstack/react-query';
import LoadingBar from '../../../components/loadingBar/LoadingBar';
import Loading from '../../../components/loading/Loading';

const WebsiteDev = () => {

  const { isLoading: webPackageLoading, error: webpackageErr, data: allWebpackage } = useQuery({
    queryKey: ['webpackage'],
    queryFn: () => axiosReq.get('/webpackage/getall').then(res => res.data)
  });
  const { isLoading: webTamplateLoading, error: webTamplateErr, data: allWebTamplate } = useQuery({
    queryKey: ['webtamplate'],
    queryFn: () => axiosReq.get('/webtemplate/getall').then(res => res.data)
  });

  const { pathname } = useLocation()
  return (
    <div className="website-dev">
      <div className="top">
        <span className='top-title'>Website Solutions</span>
      </div>
      <div className="web-dev-middle">
        <div className="left">
          <div className="service-link" style={{ backgroundColor: pathname === '/service/webdev' ? 'red' : '' }}>
            <span>Website Development</span>
            <ArrowRightAltOutlined />
          </div>
          <Link to='/service/appdevelop' className='link'>
            <div className="service-link">
              <span>App Development</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
          <Link to='/service/marketing' className='link'>
            <div className="service-link">
              <span>Digital Marketing</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
          <Link to='/service/graphic' className="service-link link">
            <span>Graphic Designing</span>
            <ArrowRightAltOutlined />
          </Link>
          <Link to='/service/content' className='link'>
            <div className="service-link">
              <span>Content Writing</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
        </div>
        <div className="right">
          <img src="/services-details-img1.jpg" alt="Website Development" />
        </div>
      </div>

      <Stack className='middle2'>
        <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.2rem' }, textAlign: 'center' }} mb={2} mt={{ xs: 10, lg: 0 }} variant='h3'>We Are Creative Web Development Company</Typography>
        <Typography sx={{ fontSize: { xs: '2rem', md: '2.3rem' }, color: 'red', textAlign: 'center', fontWeight: 200 }} variant='h4'>Focused on Growing Brands Online</Typography>

        <Stack direction={'row'} justifyContent={{ xs: 'space-around', md: 'space-between' }} mt={{ xs: 10, md: 15 }} flexWrap='wrap' gap={2}>
          {
            webCatData.map((s, i) => (
              <ServiceCatCard key={i} data={s} />
            ))
          }
        </Stack>

      </Stack>

      <Stack className='website-demo'>
        <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.2rem' }, textAlign: 'center' }} mb={2} mt={{ xs: 10, lg: 0 }} variant='h3'>Our Creative Work</Typography>
        <Typography sx={{ fontSize: { xs: '2rem', md: '2.3rem' }, color: 'red', textAlign: 'center', fontWeight: 200, mb: 10 }} variant='h4'>Website Tamplate</Typography>
        <Stack sx={{
          flexDirection: 'row',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {
            webTamplateLoading ? <><LoadingBar /> <Loading /></> : webTamplateErr ? 'Something went wrong!' : (
              allWebTamplate.map((d, i) => (
                <ServiceDemoCard key={i} data={d} />
              ))
            )
          }
        </Stack>
      </Stack>

      <Stack className='middle2'>
        <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.2rem' }, textAlign: 'center' }} mb={2} variant='h3'>Our Web Development Packages</Typography>
        <Typography sx={{ fontSize: { xs: '1.7rem', md: '2rem' }, textAlign: 'center', fontWeight: 200, color: 'red' }} variant='h4'>Get Standard Website By Paying Small Budget!</Typography>
        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} gap={{ xs: 5, md: 10 }} mt={10}>
          {
            webPackageLoading ? <><LoadingBar /> <Loading /></> : webpackageErr ? 'Something went wrong!' : (
              allWebpackage.map((data, i) => (
                <PackageCard key={i} data={data} />
              ))
            )
          }
        </Stack>
      </Stack>

      <Stack className='middle2' direction={{ xs: 'column-reverse', md: 'row' }} gap={12} alignItems='center'>
        <div className="card">
          <div className="left">
            <span>Are you looking for digital marketing services?</span>
            <Link to='/contact' className="btn link">CONTACT</Link>
          </div>
          <div className="right">
            <img src="/banner-one-img.png" alt="Digital Marketing" />
          </div>
        </div>
        <Stack gap={3}>
          <Typography variant='h4'>Website Development</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
            Our website development services are designed to create outstanding online experiences. We specialize in crafting websites that not only look great but also perform exceptionally well, meeting the unique needs of our clients.
          </Typography>
          <Typography variant='h5' color='red'>Helping clients solve application development problems</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>We take pride in solving complex application development challenges. Our team is dedicated to delivering solutions that drive growth and success for your business.</Typography>
          <Typography variant='h4' mt={6}>Why Choose Us?</Typography>
          <Stack direction={{ xm: 'column', md: 'row' }} gap={3} justifyContent='space-between'>
            <Stack direction='row' alignItems='center' gap={2}>
              <AutoAwesomeOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Best Creative <br /> Agency</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <DoneAllOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>99% Success <br />Rate</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <CampaignOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Quality <br />Marketing</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <div className="bottom">
        <div className="left">
          <span className='h1'>Our Benefits</span>
          <span className='span'>Get the best web development from Posh Coder Agency</span>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Cost-Effective Solutions</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Equal Opportunities for Growth</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>High Brand Awareness</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Higher ROI (Return on Investment)</Typography>
          </Stack>
          <div className="info">
            <div className="info-details">
              <EngineeringSharp />
              <span >Leaders in Creative Agency</span>
            </div>
            <div className="info-details">
              <WebhookSharp />
              <span>Highest Quality Development</span>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="/services-details-benefit-img.jpg" alt="Our Benefits" />
        </div>
      </div>

      <Stack className="bottom2">
        <Stack direction={'row'} flexWrap={'wrap'} gap={6} justifyContent={'center'} >
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Stack>
        <Link to='/blog' className='link' style={{
          marginTop: '5rem',
          textAlign: 'center',
          border: '1px solid gray',
          width: '200px',
          padding: '5px 10px',
          alignSelf: 'center'
        }}>All Blogs</Link>
      </Stack>
    </div>
  )
}

export default WebsiteDev;
