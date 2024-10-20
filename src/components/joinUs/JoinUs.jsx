import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Link } from "react-router-dom";
import { SlideAnimation } from "../animations/animations";
import "./JoinUs.scss";

const JoinUs = () => {
  return (
    <>
      <div className="join-us">
        <div className="wrapper">
          <div className="left">
            <SlideAnimation direction="up">
              <span>Don't Late, Contact Us Today!</span>
              <p>
                Explore Select, Our Premium Solution For Branding & Business.
              </p>
            </SlideAnimation>
          </div>
          <div className="right">
            <SlideAnimation direction="right">
              <Link href="/contact" className="contact-btn link">
                Contact Now
                <TrendingFlatIcon />
              </Link>
            </SlideAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
