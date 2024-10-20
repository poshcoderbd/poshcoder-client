/* eslint-disable react/react-in-jsx-scope */
import {
  ArrowRightAltOutlined,
  AutoAwesomeOutlined,
  CampaignOutlined,
  CheckCircle,
  DoneAllOutlined,
  EngineeringSharp,
  WebhookSharp,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./Content.scss";

const Content = () => {
  const { pathname } = useLocation();

  return (
    <div className="content">
      <div className="top">
        <span className="top-title">Content Writing Solutions</span>
      </div>
      <div className="middle">
        <div className="left">
          <Link to="/service/webdev" className="service-link link">
            <span>Website Development</span>
            <ArrowRightAltOutlined />
          </Link>
          <Link to="/service/appdevelop" className="service-link link">
            <span>App Development</span>
            <ArrowRightAltOutlined />
          </Link>
          <Link to="/service/marketing" className="link">
            <div
              className={`service-link ${
                pathname === "/service/marketing" ? "bg-red" : ""
              }`}
            >
              <span>Digital Marketing</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
          <Link to="/service/graphic" className="link">
            <div
              className={`service-link ${
                pathname === "/service/graphic" ? "bg-red" : ""
              }`}
            >
              <span>Graphic Designing</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
          <div
            className={`service-link ${
              pathname === "/service/content" ? "bg-red" : ""
            }`}
          >
            <span>Content Writing</span>
            <ArrowRightAltOutlined />
          </div>
        </div>
        <div className="right">
          <img src="/content-writing-image.jpg" alt="Content Writing" />
        </div>
      </div>

      <Stack
        className="middle2"
        direction={{ xs: "column-reverse", md: "row" }}
        gap={12}
        alignItems="center"
      >
        <div className="card">
          <div className="left">
            <span>Are you looking for Website Develop services?</span>
            <Link to="/contact" className="btn link">
              CONTACT
            </Link>
          </div>
          <div className="right">
            <img src="/banner-one-img.png" alt="Content Writing" />
          </div>
        </div>
        <Stack gap={3} mt={{ xs: 10, lg: 0 }}>
          <Typography variant="h4">Content Writing</Typography>
          <Typography
            variant="body"
            sx={{ color: "rgb(199, 199, 199)", fontWeight: "300" }}
          >
            Our content writing services are designed to help you create
            engaging and informative content for your business. We specialize in
            producing high-quality articles, blogs, and more.
          </Typography>
          <Typography variant="h5" color="red">
            Elevate your brand with compelling content
          </Typography>
          <Typography
            variant="body"
            sx={{ color: "rgb(199, 199, 199)", fontWeight: "300" }}
          >
            We understand the power of words and use them to convey your message
            effectively to your target audience. Let us enhance your online
            presence with our content.
          </Typography>
          <Typography variant="h4">Why Choose Us?</Typography>
          <Stack
            direction={{ xm: "column", md: "row" }}
            gap={3}
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" gap={2}>
              <AutoAwesomeOutlined
                sx={{
                  bgcolor: "red",
                  p: 1.5,
                  borderRadius: "50%",
                }}
                fontSize="large"
              />
              <Typography variant="h6" sx={{ color: "rgb(199, 199, 199)" }}>
                Creative Content <br /> Writing
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={2}>
              <DoneAllOutlined
                sx={{
                  bgcolor: "red",
                  p: 1.5,
                  borderRadius: "50%",
                }}
                fontSize="large"
              />
              <Typography variant="h6" sx={{ color: "rgb(199, 199, 199)" }}>
                Proven Results <br /> Record
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={2}>
              <CampaignOutlined
                sx={{
                  bgcolor: "red",
                  p: 1.5,
                  borderRadius: "50%",
                }}
                fontSize="large"
              />
              <Typography variant="h6" sx={{ color: "rgb(199, 199, 199)" }}>
                Timely Delivery
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="h5" mt={3} fontWeight="bold">
            What We Offer:
          </Typography>

          <Stack
            direction="column"
            gap={2}
            sx={{ color: "#C7C7C7", lineHeight: 1.7 }}
          >
            <Typography variant="body1">
              - **SEO-Optimized Articles**: Boost your search engine rankings
              with expertly crafted, keyword-rich content.
            </Typography>
            <Typography variant="body1">
              - **Blog Writing**: Regular blog posts to engage and inform your
              audience.
            </Typography>
            <Typography variant="body1">
              - **Copywriting**: Persuasive and engaging marketing content
              tailored to your business needs.
            </Typography>
            <Typography variant="body1">
              - **Product Descriptions**: Highlight your products with
              well-written descriptions that drive conversions.
            </Typography>
            <Typography variant="body1">
              - **Social Media Content**: Short, engaging content to enhance
              your presence on platforms like Instagram, Facebook, and Twitter.
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <div className="bottom">
        <div className="left">
          <span className="h1">Our Benefits</span>
          <span className="span">
            Experience the best in Content Writing from Posh Coder Agency
          </span>
          <Stack direction="row" alignItems="center" gap={2}>
            <CheckCircle sx={{ color: "red" }} />
            <Typography>Customized Content Solutions</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2}>
            <CheckCircle sx={{ color: "red" }} />
            <Typography>SEO-Optimized Content</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2}>
            <CheckCircle sx={{ color: "red" }} />
            <Typography>Engaging and Informative Articles</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2}>
            <CheckCircle sx={{ color: "red" }} />
            <Typography>Timely Delivery and Updates</Typography>
          </Stack>
          <div className="info">
            <div className="info-details">
              <EngineeringSharp />
              <span>Leaders in Content Writing</span>
            </div>
            <div className="info-details">
              <WebhookSharp />
              <span>Proven Content Strategies</span>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="/services-details-benefit-img.jpg" alt="Our Benefits" />
        </div>
      </div>
    </div>
  );
};

export default Content;
