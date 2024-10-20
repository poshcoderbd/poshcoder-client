import { FadeAnimation, SlideAnimation } from "../animations/animations";
import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <h1 className="experience-title">
        <FadeAnimation damping={0.1} cascade={"cascade"}>
          Experience
        </FadeAnimation>
      </h1>
      <div className="skills" id="experience">
        <div className="left">
          <div className="left-container">
            <SlideAnimation direction="up">
              <div className="h4">Professional Skills</div>
              <div className="skills-h1">
                We are a digitally-led, full-service creative agency
              </div>
              <p>
                Our long experience at the top of the events business means we
                have expertise which reaches across a number of sectors, as well
                as knowledge of specific protocol and local.
              </p>
              <div className="skills-score">
                <div className="skills-score-item">
                  <div className="score">
                    <span>100%</span>
                  </div>
                  <div className="score-title">Branding Design</div>
                </div>
                <div className="skills-score-item">
                  <div className="score">
                    <span>100%</span>
                  </div>
                  <div className="score-title">Digital Marketing</div>
                </div>
                <div className="skills-score-item">
                  <div className="score">
                    <span>100%</span>
                  </div>
                  <div className="score-title">Web Development</div>
                </div>
              </div>
            </SlideAnimation>
          </div>
        </div>
        <div className="right">
          <SlideAnimation>
            <img src="/abt2.jpg" alt="Skilled Team" />
          </SlideAnimation>
        </div>
      </div>
    </>
  );
};

export default Skills;
