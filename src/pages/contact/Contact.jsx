import { useForm } from "@formspree/react";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import React, { useEffect } from "react";
import CButton from "../../common/CButton";
import { useUserInfo } from "../../hook/useUserInfo";
import "./Contact.scss";

const Contact = () => {
  const { userInfo } = useUserInfo();
  const [state, handleSubmit] = useForm("meojwyor");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.success]);

  if (state.succeeded) {
    return (
      <h2 className="contact-success">
        Thanks for submit! We will contact you soon.
      </h2>
    );
  }
  return (
    <div className="contact">
      <div className="top">
        <h1 className="top-title">CONTACT US</h1>
      </div>
      <div className="middle">
        <div className="left">
          <div className="heading">
            Let’s Start Working
            <br /> Together
          </div>
          <div className="info">
            <div className="info-details">
              <PsychologyAltIcon />
              <div className="main-info">
                <span>Have Question?</span>
                <span>+88 01790-862914</span>
              </div>
            </div>
            <div className="info-details">
              <ForwardToInboxIcon />
              <div className="main-info">
                <span>Write Email</span>
                <span>poshcoderbd@gmail.com</span>
              </div>
            </div>
            <div className="info-details">
              <LocationOnIcon />
              <div className="main-info">
                <span>Visit Office</span>
                <span>
                  Bashundhara Residential Area, Dhaka, Bangladesh, 1229
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <div className="form1">
              <input required name="name" type="text" placeholder="Name" />
              <input
                defaultValue={userInfo?.email ?? ""}
                required
                readOnly={userInfo}
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="form2">
              <input required name="phone" type="number" placeholder="Phone" />
              <input
                required
                name="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <CButton isLoading={state.submitting} type="submit">
              SEND NOW
            </CButton>
          </form>
        </div>
      </div>
      <div className="bottom">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14599.600557707927!2d90.4335647!3d23.8221498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72228136e5d%3A0x6dcc2b981cd155e7!2sPosh%20Coder!5e0!3m2!1sen!2sbd!4v1711269110217!5m2!1sen!2sbd"></iframe>
      </div>
    </div>
  );
};

export default Contact;
