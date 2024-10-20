import { Instagram, WhatsApp } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box } from "@mui/material";
import React from "react";
import { FadeAnimation, SlideAnimation } from "../animations/animations";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro">
      <div className="darkbg"></div>
      <div className="bgc">
        <img src="/bg.jpg" alt="Creative Works" />
      </div>
      <div className="intro-container">
        <div className="text">
          <div className="heading">
            <span className="t1">
              <FadeAnimation damping={0.1} cascade={"cascade"}>
                We Are
              </FadeAnimation>
            </span>
            <Box display={{ xs: "none", md: "flex" }} className="t2">
              <FadeAnimation damping={0.1} delay={100} cascade={"cascade"}>
                CREATIVE BRANDING
              </FadeAnimation>
            </Box>
            <Box display={{ xs: "flex", md: "none" }} className="t2">
              <FadeAnimation damping={0.1} delay={500} cascade={"cascade"}>
                CREATIVE
              </FadeAnimation>
            </Box>
            <Box display={{ xs: "flex", md: "none" }} className="t4">
              <FadeAnimation damping={0.1} delay={1000} cascade={"cascade"}>
                BRANDING
              </FadeAnimation>
            </Box>
            <div className="t3">
              <FadeAnimation damping={0.3} cascade={"cascade"} delay={500}>
                AGENCY.
              </FadeAnimation>
            </div>
          </div>
          <div className="btn-txt">
            <SlideAnimation cascade direction="up">
              <a
                href="https://wa.me/+8801790862914"
                target="blank"
                className="readmore-btn link"
              >
                {" "}
                <WhatsApp />
                Contact Us
              </a>
              <p>
                We can help you channel your potential implementing your idea.
                We take care of all your needs, crafting specific and targeted
                solutions.
              </p>
            </SlideAnimation>
          </div>
        </div>
        <div className="icons">
          <FadeAnimation>
            <a
              href="https://www.facebook.com/poshcoderbd"
              target="blank"
              className="link"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/posh-coder/"
              target="blank"
              className="link"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/poshcoderbd"
              target="blank"
              className="link"
            >
              <Instagram />
            </a>
            <a className="link" href="mailto: poshcoderbd@gmail.com">
              <EmailIcon />
            </a>
            <a className="link" href="tel: 01790862914">
              {" "}
              <PhoneIcon />
            </a>
            <a
              className="link"
              target="blank"
              href="https://wa.me/+8801790862914"
            >
              {" "}
              <WhatsApp />
            </a>
          </FadeAnimation>
        </div>
      </div>
    </div>
  );
};

export default Intro;
