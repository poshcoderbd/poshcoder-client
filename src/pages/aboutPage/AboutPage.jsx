import {
  EmojiObjects,
  QuestionAnswer,
  TravelExplore,
  VerifiedUser,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import JoinUs from "../../components/joinUs/JoinUs";
import "./AboutPage.scss";

const data = [
  {
    icon: <TravelExplore sx={{ fontSize: "60px" }} />,
    title: "Versatility",
    desc: "We are your go-to agency for a wide spectrum of services, ensuring a cohesive and unified approach to your digital strategy.",
  },
  {
    icon: <QuestionAnswer sx={{ fontSize: "60px" }} />,
    title: "Innovation",
    desc: "Our team is always at the forefront of industry trends, incorporating the latest technologies and design trends into our projects.",
  },
  {
    icon: <EmojiObjects sx={{ fontSize: "60px" }} />,
    title: "Client-Centric Approach:",
    desc: "Your success is our priority. We collaborate closely with our clients to understand their goals and deliver solutions that exceed expectations.",
  },
  {
    icon: <VerifiedUser sx={{ fontSize: "60px" }} />,
    title: "Quality Assurance:",
    desc: " We are committed to delivering excellence. Our rigorous quality assurance processes ensure that every project meets the highest standards.",
  },
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="top">
        <h1 className="top-title">ABOUT US</h1>
      </div>
      <div className="middle">
        <Stack
          direction={{ xs: "column-reverse", lg: "row" }}
          p={{ xs: 2, lg: 10 }}
          gap={6}
          alignItems={"center"}
        >
          <Box
            sx={{
              flex: 1,
            }}
          >
            <img
              style={{ width: "100%" }}
              src="/company-about.png"
              alt="Professional Team"
            />
          </Box>
          <Stack gap={2} flex={1} mt={5}>
            {/* <Typography variant='h3' sx={{ fontSize: { xs: '2.5rem', lg: '3.3rem' } }} fontWeight={'bold'} mt={5}>About Agency</Typography> */}
            <Typography variant="h5" sx={{ fontWeight: "300" }}>
              Welcome to Posh-Coder Agency - Your Gateway to Comprehensive
              Creative Solutions!
            </Typography>
            <Typography>
              We pride ourselves on being a one-stop destination for all your
              digital needs. We are a dynamic and innovative agency that brings
              together a diverse range of services to empower your brand and
              elevate your online presence.
            </Typography>
            <Stack gap={1.5} sx={{ fontSize: "16px", fontWeight: "300" }}>
              <Typography variant="h5" sx={{ fontWeight: "300" }}>
                {" "}
                What We Offer:
              </Typography>
              <span>
                <b>Web Development:</b> Transform your online presence with our
                cutting-edge web development services. Our expert team crafts
                visually stunning and highly functional websites tailored to
                your unique business needs.
              </span>
              <span>
                <b>Graphic Design:</b> Make a lasting impression with
                captivating visual elements. Our skilled graphic designers
                breathe life into your ideas, creating striking visuals that
                speak volumes about your brand.
              </span>
              <span>
                <b>App Development:</b>
                Stay ahead in the mobile era with our custom app development
                services. Whether it's iOS, Android, or cross-platform
                development, we build apps that not only meet industry standards
                but exceed user expectations.
              </span>
              <span>
                <b>Content Writing:</b>
                Words have the power to engage and inspire. Our talented content
                writers deliver compelling and SEO-optimized content that tells
                your story, connects with your audience, and boosts your search
                engine rankings.
              </span>
              <span>
                <b>Digital Marketing:</b>
                Unlock the full potential of your brand with our digital
                marketing strategies. From SEO and social media management to
                online advertising, we tailor our approach to maximize your
                online visibility and drive results.
              </span>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              gap={{ xs: 5, lg: 10 }}
              mt={5}
              textAlign={"center"}
            >
              <Stack>
                <Typography variant="h3" fontWeight="bold">
                  50+
                </Typography>
                <Typography>Happy Client</Typography>
              </Stack>
              <Stack>
                <Typography variant="h3" fontWeight="bold">
                  10k+
                </Typography>
                <Typography>Hours Worked</Typography>
              </Stack>
              <Stack>
                <Typography variant="h3" fontWeight="bold">
                  80+
                </Typography>
                <Typography>Project Done</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Typography
            variant="h3"
            textAlign={"center"}
            sx={{ fontSize: { xs: "2.5rem", lg: "3.3rem" } }}
            mt={10}
            fontWeight={"bold"}
          >
            Why Chooose Us
          </Typography>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            gap={5}
            mt={5}
            justifyContent={"center"}
          >
            {data.map((d, i) => (
              <Stack
                key={i}
                sx={{
                  width: "200px",
                  textAlign: "center",
                  border: "1px solid rgb(56, 56, 56)",
                  p: "3rem 2rem",
                  borderRadius: "5px",
                }}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
              >
                {d.icon}
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "26px",
                    fontWeight: "bold",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  {d.title}
                </Typography>
                <Typography variant="body">{d.desc}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <JoinUs />
      </div>
    </div>
  );
};

export default AboutPage;
