import React, { useState } from 'react';
import { Box, Button, Stack, Typography, Divider } from '@mui/material';
import { AutoAwesomeOutlined, CampaignOutlined, DoneAllOutlined } from '@mui/icons-material';
import CDialog from '../../../common/CDialog';
import OrderPlace from '../../../common/OrderPlace';

const ContentCreation = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <Stack maxWidth='xl' sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', p: 4, borderRadius: '16px' }} gap={3} mt={{ xs: 10, lg: 0 }}>
      <Typography mb={1} variant="h3" fontWeight="bold" color="primary">
        Content Writing & Creation Services
      </Typography>

      <Stack direction="row" justifyContent="space-between">
        <Box />
        <Button onClick={() => setDialogOpen(true)} variant="contained" sx={{ borderRadius: '20px', px: 4, py: 1.5 }} color="primary">
          Contact Us for Content Creation
        </Button>
      </Stack>

      {/* order place  */}
      <CDialog openDialog={dialogOpen}>
        <OrderPlace data={null} closeDialog={() => setDialogOpen(false)} />
      </CDialog>

      <Typography variant="body1" sx={{ color: '#333', fontWeight: '300', lineHeight: 1.6 }}>
        Our content writing services are tailored to help your business communicate effectively with your audience. Whether
        you need engaging blog posts, SEO-optimized articles, or compelling website content, we provide high-quality writing
        that speaks to your brand and drives results.
      </Typography>

      <Typography variant="h5" color="primary" mt={2}>
        Elevate Your Brand with High-Quality Content
      </Typography>

      <Typography variant="body1" sx={{ color: '#333', fontWeight: '300', lineHeight: 1.6 }}>
        We craft content that resonates with your audience, enhancing your brand's voice and online presence. Whether it's storytelling,
        informative articles, or marketing copy, our team ensures every word counts.
      </Typography>

      <Typography variant="h4" mt={6} fontWeight="bold" color="primary">
        Why Choose Us?
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={2}>
          <AutoAwesomeOutlined
            sx={{ bgcolor: 'primary.main', color: '#fff', p: 1, borderRadius: '50%' }}
            fontSize="large"
          />
          <Typography variant="h6" sx={{ color: '#333' }}>
            Creative & Engaging <br /> Content
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" gap={2}>
          <DoneAllOutlined
            sx={{ bgcolor: 'primary.main', color: '#fff', p: 1, borderRadius: '50%' }}
            fontSize="large"
          />
          <Typography variant="h6" sx={{ color: '#333' }}>
            Proven Results <br /> and Impact
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" gap={2}>
          <CampaignOutlined
            sx={{ bgcolor: 'primary.main', color: '#fff', p: 1, borderRadius: '50%' }}
            fontSize="large"
          />
          <Typography variant="h6" sx={{ color: '#333' }}>
            Timely Delivery <br /> Every Time
          </Typography>
        </Stack>
      </Stack>

      <Typography variant="h5" mt={4} color="primary" fontWeight="bold">
        What We Offer:
      </Typography>

      <Stack direction="column" gap={2} sx={{ color: '#333', lineHeight: 1.7 }}>
        <Typography variant="body1">
          - **SEO-Optimized Articles**: Boost your search engine rankings with expertly crafted, keyword-rich content.
        </Typography>
        <Typography variant="body1">
          - **Blog Writing**: Regular blog posts to engage and inform your audience.
        </Typography>
        <Typography variant="body1">
          - **Copywriting**: Persuasive and engaging marketing content tailored to your business needs.
        </Typography>
        <Typography variant="body1">
          - **Product Descriptions**: Highlight your products with well-written descriptions that drive conversions.
        </Typography>
        <Typography variant="body1">
          - **Social Media Content**: Short, engaging content to enhance your presence on platforms like Instagram, Facebook, and Twitter.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ContentCreation;
