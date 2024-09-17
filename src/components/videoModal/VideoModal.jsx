import React, { useState } from 'react';
import './VideoModal.scss';

const VideoModal = ({ videoSrc, onClose }) => {
  
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="video">
            <span className="close" onClick={onClose}>&times;</span>
          <video controls autoPlay muted loop>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
