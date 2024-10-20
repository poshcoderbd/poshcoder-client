import {
  AddBusinessSharp,
  AppShortcutSharp,
  BubbleChartSharp,
  EngineeringSharp,
  PlayArrow,
  SourceSharp,
  TrendingFlatSharp,
  WebSharp,
  WebhookSharp,
} from "@mui/icons-material";
import { useState } from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import VideoModal from "../../components/videoModal/VideoModal";
import { trustedby } from "../../data/trustedByData";
import "./ServicePage.scss";

const ServicePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="service-page">
      <div className="top">
        <h1 className="top-title">OUR SERVICES</h1>
      </div>
      <div className="middle">
        <span className="h1">
          {" "}
          What we’re offering <br />
          to our customers
        </span>
        <div className="service-card">
          {/* <Link to='/service/business' className='card-box link'>
            <BusinessCenterOutlined />
            <span>Online Business<br />Creation</span>
            <TrendingFlatSharp className='arrow' />
          </Link> */}
          <Link to="/service/webdev" className="card-box link">
            <WebSharp />
            <span>
              Website Design and
              <br />
              Development
            </span>
            <TrendingFlatSharp className="arrow" />
          </Link>
          <Link to="/service/graphic" className="card-box link">
            <BubbleChartSharp />
            <span>
              Graphic Design and
              <br />
              Branding
            </span>
            <TrendingFlatSharp className="arrow" />
          </Link>
          <Link to="/service/marketing" className="card-box link">
            <AddBusinessSharp />
            <span>Online Marketing and SEO</span>
            <TrendingFlatSharp className="arrow" />
          </Link>
          <Link to="/service/content" className="card-box link">
            <SourceSharp />
            <span>
              Content Creation and
              <br />
              Design
            </span>
            <TrendingFlatSharp className="arrow" />
          </Link>
          <Link to="/service/appdevelop" className="card-box link">
            <AppShortcutSharp />
            <span>
              Software Design and
              <br />
              Development
            </span>
            <TrendingFlatSharp className="arrow" />
          </Link>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <Slide direction="up" triggerOnce>
            <span className="h1">Why you should choose our agency</span>
            <span className="span">
              At Our Agency, We Deliver Exceptional Results
            </span>
            <p>
              When it comes to choosing a creative agency, you want the best.
              Our agency stands out from the rest. We are committed to providing
              top-notch services that exceed your expectations.
            </p>
            <div className="info">
              <div className="info-details">
                <EngineeringSharp />
                <span>Leaders in Creative Solutions</span>
              </div>
              <div className="info-details">
                <WebhookSharp />
                <span>Unparalleled Development Quality</span>
              </div>
            </div>
          </Slide>
        </div>

        <div className="right">
          <img src="/why-choose.jpg" alt="Person working" />
        </div>
      </div>

      <div className="bottom1">
        <div className="img">
          <Zoom triggerOnce>
            <img src="/team-laptop.jpg" alt="Work desk with laptop" />
          </Zoom>
          <div className="play-btn" onClick={openModal}>
            <PlayArrow />
          </div>
        </div>
        {modalOpen && (
          <VideoModal videoSrc="/PromoVideo.mp4" onClose={closeModal} />
        )}
      </div>
      <div className="clients-logo">
        <h3>Trusted By</h3>
        <Marquee autoFill gradient gradientColor={[0, 0, 0]}>
          {trustedby.map((data, ind) => (
            <img
              style={{ marginRight: "30px" }}
              key={ind}
              src={data.img}
              alt={`Satisfied Client ${ind + 1}`}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ServicePage;
