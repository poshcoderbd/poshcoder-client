import { NoEncryption, PanToolAlt } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <Box sx={{
      position: 'fixed',
      zIndex: 99999,
      right: 70, bottom: 70, display: { xs: 'none', lg: 'block' }
    }}>
      {isVisible && (
        <div onClick={scrollToTop}>
          <IconButton sx={{
            bgcolor: 'lightgray',
            ":hover": {
              bgcolor: 'lightblue'
            }
          }}>
            <PanToolAlt fontSize="large" />
          </IconButton>
        </div>
      )}
    </Box>
  );
}