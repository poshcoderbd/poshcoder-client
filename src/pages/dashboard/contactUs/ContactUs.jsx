import { useForm } from "@formspree/react";
import { WhatsApp } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import CButton from "../../../common/CButton";
import { useUserInfo } from "../../../hook/useUserInfo";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("meojwyor");
  const { userInfo } = useUserInfo();
  if (state.succeeded) {
    return (
      <h2 className="contact-success">
        Thanks for submit! We will contact you soon.
      </h2>
    );
  }
  const handleWhatsAppClick = () => {
    const phoneNumber = "+8801790862914"; // Replace with your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <Box
      maxWidth="xl"
      sx={{
        bgcolor: "#f4f4f4",
        minHeight: "100vh",
        p: 3,
        borderRadius: "16px",
      }}
    >
      <Typography
        variant="h4"
        mb={2}
        align="center"
        sx={{ color: "primary.main" }}
      >
        Contact Us
      </Typography>

      <Stack
        spacing={3}
        sx={{
          maxWidth: "600px",
          mx: "auto",
          p: 3,
          bgcolor: "#fff",
          borderRadius: "16px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            name="name"
            label="Your Name"
            variant="outlined"
            sx={{ bgcolor: "#f9f9f9", mb: 2 }}
          />
          <TextField
            required
            fullWidth
            inputProps={{ readOnly: true }}
            value={userInfo?.email ?? ""}
            name="email"
            label="Your Email"
            variant="outlined"
            sx={{ bgcolor: "#f9f9f9", mb: 2 }}
          />
          <TextField
            required
            fullWidth
            name="phone"
            label="Your Phone"
            variant="outlined"
            sx={{ bgcolor: "#f9f9f9", mb: 2 }}
          />
          <TextField
            required
            fullWidth
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            sx={{ bgcolor: "#f9f9f9", mb: 2 }}
          />

          <CButton
            isLoading={state.submitting}
            type="submit"
            variant="contained"
            color="primary"
            className="send-message-btn"
          >
            Send Message
          </CButton>
        </form>

        <Button
          startIcon={<WhatsApp />}
          variant="outlined"
          color="success"
          sx={{ py: 1.5, borderRadius: "10px" }}
          onClick={handleWhatsAppClick}
        >
          Contact Us on WhatsApp
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactUs;
