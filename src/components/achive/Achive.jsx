import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import React, { useState } from "react";
import { SlideAnimation, ZoomAnimation } from "../animations/animations";
import VideoModal from "../videoModal/VideoModal";
import "./Achive.scss";

const Achive = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="achive">
      <div className="achive-wrapper">
        <div className="left">
          <div className="left-container">
            <div className="achive-grid">
              <SlideAnimation direction="right" duration={2000}>
                <Groups2OutlinedIcon />
                <span>20+</span>
                <p>Expert People</p>
              </SlideAnimation>
            </div>
            <div className="achive-grid">
              <SlideAnimation direction="left" duration={2000}>
                <SentimentVerySatisfiedOutlinedIcon />
                <span>70+</span>
                <p>Satisfied Client</p>
              </SlideAnimation>
            </div>
            <div className="achive-grid">
              <SlideAnimation direction="right" duration={2000}>
                <FileDownloadOutlinedIcon />
                <span>200+</span>
                <p>Downloaded</p>
              </SlideAnimation>
            </div>
            <div className="achive-grid">
              <SlideAnimation direction="down" duration={2000}>
                <AppsOutlinedIcon />
                <span>30+</span>
                <p>Unique Product</p>
              </SlideAnimation>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="img">
            <ZoomAnimation>
              <img src="/laptop.jpg" alt="Laptop" />
            </ZoomAnimation>
            <div className="play-btn" onClick={openModal}>
              <PlayArrowIcon />
            </div>
          </div>
          {modalOpen && (
            <VideoModal videoSrc="/PromoVideo.mp4" onClose={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Achive;
