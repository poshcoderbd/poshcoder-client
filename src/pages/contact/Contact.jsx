import './Contact.scss';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <div className="contact">
            <div className="top">
        <span className='top-title'>CONTACT US</span>
      </div>
      <div className="middle">
        <div className="left">
          <div className='heading'>Let’s Start Working<br /> Together</div>
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
                <span>Bashundhara Residential Area, Dhaka, Bangladesh, 1229</span>
              </div>
            </div>

          </div>
        </div>
        <div className="right">
          <form>
            <div className="form1">
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Email' />
            </div>
            <div className="form2">
              <input type="text" placeholder='Phone' />
              <input type="text" placeholder='Subject' />
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button>SEND NOW</button>
          </form>
        </div>
      </div>
      <div className="bottom">
      {/* width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14599.600557707927!2d90.4335647!3d23.8221498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72228136e5d%3A0x6dcc2b981cd155e7!2sPosh%20Coder!5e0!3m2!1sen!2sbd!4v1711269110217!5m2!1sen!2sbd"></iframe>
      </div>
    </div>
  )
}

export default Contact