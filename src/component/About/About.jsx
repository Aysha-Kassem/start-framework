import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="p-5 bg_main_color text_main_color">
      <div className=" d-flex flex-column align-items-center justify-content-center p-5 gap-3">
        <h2 className="fw-bolder pt-md-5">ABOUT COMPONENT</h2>
        <div className="position-relative star">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="row">
          <p className="col-12 col-md-6">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="col-12 col-md-6 pb-md-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
