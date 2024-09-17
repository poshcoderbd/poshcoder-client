import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const ContactUs = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+8801790862914"; // Replace with your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <Box maxWidth='xl' sx={{ bgcolor: '#f4f4f4', minHeight: '100vh', p: 3, borderRadius: '16px' }}>
      <Typography variant="h4" mb={2} align="center" sx={{ color: 'primary.main' }}>
        Contact Us
      </Typography>

      <Stack spacing={3} sx={{ maxWidth: '600px', mx: 'auto', p: 3, bgcolor: '#fff', borderRadius: '16px' }}>
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          sx={{ bgcolor: '#f9f9f9' }}
        />
        <TextField
          fullWidth
          label="Your Email"
          variant="outlined"
          sx={{ bgcolor: '#f9f9f9' }}
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          sx={{ bgcolor: '#f9f9f9' }}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{ py: 1.5, borderRadius: '10px' }}
        >
          Send Message
        </Button>

        <Button
          startIcon={<WhatsApp />}
          variant="outlined"
          color="success"
          sx={{ py: 1.5, borderRadius: '10px' }}
          onClick={handleWhatsAppClick}
        >
          Contact Us on WhatsApp
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactUs;
