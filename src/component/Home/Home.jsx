import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "/src/assets/avataaars.svg";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className='p-5 bg_main_color text_main_color text-center'>
      <div className=" d-flex flex-column align-items-center justify-content-center p-5 gap-1">
        <img src={avatar} alt="Hero Avatar" className="w-25" />
        <h2 className="fw-bolder">START FRAMEWORK</h2>
        <div className="position-relative star">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <p>Graphic Artist - Web Designer - xllustrator</p>
      </div>
    </div>
  );
};

export default Home;
