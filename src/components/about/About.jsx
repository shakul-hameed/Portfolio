import "./about.css";
import image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";
import resume from "../../../public/RESUME.pdf"

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={image}  className="about_img" />
        <div className="about_data grid">
        <div className="about_info">
          <p className="about_desription">I am Shakul Hameed,Web developer from Tirupur,Tamil Nadu.I have rich experience in website design and building and customization, also I am good at Backend</p>

          <a href={resume} download="RESUME" className="btn cv">Download CV</a>
        </div>
        <div className="about_skills grid">
          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name">Developement</h3>
              <span className="skills_number ">90%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage development"></span>
            </div>
          </div>

          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name">Editing</h3>
              <span className="skills_number ">70%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage editing"></span>
            </div>
          </div>

          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name">UI/UX</h3>
              <span className="skills_number ">50%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage ui-ux"></span>
            </div>
          </div>
        </div>
      </div>
      </div>

      <AboutBox/>
   
    </section>
  )
}

export default About