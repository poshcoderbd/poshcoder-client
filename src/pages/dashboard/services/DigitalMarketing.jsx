import React, { useState } from 'react';
import { Box, Button, Stack, Typography, Divider } from '@mui/material';
import { AutoAwesomeOutlined, CampaignOutlined, DoneAllOutlined } from '@mui/icons-material';
import CDialog from '../../../common/CDialog';
import OrderPlace from '../../../common/OrderPlace';

const DigitalMarketing = () => {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <Stack maxWidth='xl' sx={{
      bgcolor: '#fff',
      p: 3, borderRadius: '16px',
      minHeight: '100vh'
    }} gap={3} mt={{ xs: 10, lg: 0 }}>
      <Typography mb={1} variant="h3" fontWeight="bold" color="primary">
        Digital Marketing Solutions
      </Typography>

      <Stack direction="row" justifyContent="space-between">
        <Box />
        <Button onClick={() => setDialogOpen(true)} variant="contained" sx={{ borderRadius: '20px', px: 4, py: 1.5 }} color="primary">
          Contact Us for Your Marketing Needs
        </Button>
      </Stack>

      {/* order place  */}
      <CDialog openDialog={dialogOpen}>
        <OrderPlace data={null} closeDialog={() => setDialogOpen(false)} />
      </CDialog>

      <Typography variant="body1" sx={{ color: '#333', fontWeight: '300', lineHeight: 1.6 }}>
        Elevate your brand and grow your business with our innovative digital marketing services. From SEO to social media
        advertising, we craft strategies that engage your audience and drive measurable results. Let us help you build a powerful
        online presence that stands out from the competition.
      </Typography>

      <Typography variant="h5" color="primary" mt={2}>
        Maximize Your Online Reach and Impact
      </Typography>

      <Typography variant="body1" sx={{ color: '#333', fontWeight: '300', lineHeight: 1.6 }}>
        Our team uses the latest marketing tools and techniques to enhance your brand’s visibility and achieve your business goals.
        With a focus on ROI and growth, we tailor our strategies to suit your specific needs.
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
            Creative Marketing <br /> Strategies
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" gap={2}>
          <DoneAllOutlined
            sx={{ bgcolor: 'primary.main', color: '#fff', p: 1, borderRadius: '50%' }}
            fontSize="large"
          />
          <Typography variant="h6" sx={{ color: '#333' }}>
            Proven Results <br /> & ROI
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" gap={2}>
          <CampaignOutlined
            sx={{ bgcolor: 'primary.main', color: '#fff', p: 1, borderRadius: '50%' }}
            fontSize="large"
          />
          <Typography variant="h6" sx={{ color: '#333' }}>
            Effective Campaigns <br /> on Time
          </Typography>
        </Stack>
      </Stack>

      <Typography variant="h5" mt={4} color="primary" fontWeight="bold">
        What We Offer:
      </Typography>

      <Stack direction="column" gap={2} sx={{ color: '#333', lineHeight: 1.7 }}>
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
  );
};

export default DigitalMarketing;
