import './Graphic.scss';
import {
  Stack,
  Typography,
  Container
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
import { graphicCatData } from '../../../data/graphicCatData';
import ServiceCatCard from '../../../components/serviceCategory/ServiceCatCard';
import ServiceDemoCard from '../../../components/websiteDemoCard/ServiceDemoCard';
import { graphicTemplateData } from '../../../data/graphicTamplateData';
import { graphicPackageData } from '../../../data/graphicPackageData';
import PackageCard from '../../../components/packageCard/PackageCard';
import { axiosReq } from '../../../utils/axiosReq';
import { useQuery } from '@tanstack/react-query';
import LoadingBar from '../../../components/loadingBar/LoadingBar';
import Loading from '../../../components/loading/Loading';

const Graphic = () => {

  const { isLoading: graphicPackageLoading, error: graphicpackageErr, data: allGraphicpackage } = useQuery({
    queryKey: ['graphicpackage'],
    queryFn: () => axiosReq.get('/graphicpackage/getall').then(res => res.data)
  });
  const { isLoading: graphicTemplateLoading, error: graphicTemplateErr, data: allGraphicTemplate } = useQuery({
    queryKey: ['graphictemplate'],
    queryFn: () => axiosReq.get('/graphictemplate/getall').then(res => res.data)
  });


  const { pathname } = useLocation();

  return (
    <div className="graphic">
      <div className="top">
        <span className='top-title'>Graphic Solutions</span>
      </div>
      <div className="middle">
        <div className="left">
          <Link to='/service/webdev' className="service-link link" >
            <span>Website Development</span>
            <ArrowRightAltOutlined />
          </Link>
          <Link to='/service/appdevelop' className="service-link link">
            <span>App Development</span>
            <ArrowRightAltOutlined />
          </Link>
          <Link to='/service/marketing' className='link'>
            <div className="service-link" style={{ backgroundColor: pathname === '/service/marketing' ? 'red' : '' }}>
              <span>Digital Marketing</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
          <div className="service-link" style={{ backgroundColor: pathname === '/service/graphic' ? 'red' : '' }}>
            <span>Graphic Designing</span>
            <ArrowRightAltOutlined />
          </div>
          <Link to='/service/content' className='link'>
            <div className="service-link">
              <span>Content Writing</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
        </div>
        <div className="right">
          <img src="/graphic-design-image.jpg" alt="Graphic Design" />
        </div>
      </div>

      <Container maxWidth='xl'>
        <Stack direction={'row'} justifyContent={{ xs: 'space-around', md: 'space-between' }} my={{ xs: 10, md: 15 }} flexWrap='wrap' gap={2}>
          {
            graphicCatData.map(s => (
              <ServiceCatCard key={s} data={s} />
            ))
          }
        </Stack>
      </Container>

      <Container maxWidth='xl'>
        <Stack mb='10rem'>
          <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.2rem' }, textAlign: 'center' }} mb={2} mt={{ xs: 10, lg: 0 }} variant='h3'>Our Creative Work</Typography>
          <Typography sx={{ fontSize: { xs: '2rem', md: '2.3rem' }, color: 'red', textAlign: 'center', fontWeight: 200, mb: 10 }} variant='h4'>Graphics Design</Typography>
          <Stack sx={{
            flexDirection: 'row',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {
              graphicTemplateLoading ? <><LoadingBar /> <Loading /></> : graphicTemplateErr ? 'Something went wrong!' :
                allGraphicTemplate.map(d => (
                  <ServiceDemoCard key={d} data={d} />
                ))
            }
          </Stack>
        </Stack>
      </Container>

      <Container maxWidth='xl'>
        <Stack mb='10rem'>
          <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.2rem' }, textAlign: 'center' }} mb={2} variant='h3'>Our Graphic Design Packages</Typography>
          <Typography sx={{ fontSize: { xs: '1.7rem', md: '2rem' }, textAlign: 'center', fontWeight: 200, color: 'red' }} variant='h4'>Get Stunning Design By Paying Small Budget!</Typography>
          <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} gap={{ xs: 5, md: 10 }} mt={10}>
            {
              graphicPackageLoading ? <><LoadingBar /> <Loading /></> : graphicpackageErr ? 'Something went wrong!' :
                allGraphicpackage.map((data, i) => (
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
            <img src="/banner-one-img.png" alt="Graphic Design" />
          </div>
        </div>
        <Stack gap={3} mt={{ xs: 10, lg: 0 }}>
          <Typography variant='h4'>Graphic Designing</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
            Our graphic design services are tailored to bring your creative ideas to life. We specialize in creating visually stunning designs that captivate and engage your audience.
          </Typography>
          <Typography variant='h5' color='red'>Transforming your ideas into beautiful visuals</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
            We take pride in turning your concepts into eye-catching graphics that leave a lasting impression. Our designs are crafted with precision and creativity.
          </Typography>
          <Typography variant='h4' mt={6}>Why Choose Us?</Typography>
          <Stack direction={{ xm: 'column', md: 'row' }} gap={3} justifyContent='space-between'>
            <Stack direction='row' alignItems='center' gap={2}>
              <AutoAwesomeOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Creative Graphic <br /> Designs</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <DoneAllOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Quality <br /> Designs</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <CampaignOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Timely <br /> Delivery</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <div className="bottom">
        <div className="left">
          <span className='h1'>Our Benefits</span>
          <span className='span'>Experience the best in Graphic Design from Posh Coder Agency</span>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Creative and Unique Designs</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Customized Solutions</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Effective Visual Communication</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Client-Centric Approach</Typography>
          </Stack>
          <div className="info">
            <div className="info-details">
              <EngineeringSharp />
              <span >Leaders in Creative Design</span>
            </div>
            <div className="info-details">
              <WebhookSharp />
              <span>Top-Quality Design Solutions</span>
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

export default Graphic;
