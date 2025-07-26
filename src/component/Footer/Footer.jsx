import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className=" bg_secondary_color text_main_color p-5 text-center">
        <div className="row g-5">
          <div className="col-md-4">
            <div className="footer-item">
              <h5>LOCATION</h5>
              <p className="small">
                2215 John Daniel Drive
                <br /> <br />
                Clark, MO 65243
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-item">
              <h5>AROUND THE WEB</h5>
              <p className="small d-flex justify-content-center gap-2">
                <span className="border rounded-circle p-1">
                  <FontAwesomeIcon icon={faFacebookF} />
                </span>
                <span className="border rounded-circle p-1">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
                <span className="border rounded-circle p-1">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </span>
                <span className="border rounded-circle p-1">
                  <FontAwesomeIcon icon={faGlobe} />
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-item">
              <h5>ABOUT FREELANCER</h5>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_tertiary_color text_main_color p-3 text-center small">
        Copyright &copy; Your Website 2021
      </div>
    </div>
  );
};

export default Footer;
