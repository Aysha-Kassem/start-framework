import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FloatingInput from "./FloatingInput";

const Contact = () => {
  return (
    <div className="p-3 pb-5 text_secondary_color">
      <div className="d-flex flex-column align-items-center justify-content-center gap-3">
        <h2 className="fw-bolder">CONTACT SECTION</h2>
        <div className="mx-2 position-relative star2">
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>

      <div className="d-grid gap-0 py-5 inputs">
        <FloatingInput label="User Name" type="text" name="username" />
        <FloatingInput label="User Age" type="number" name="age" />
        <FloatingInput label="User Email" type="email" name="email" />
        <FloatingInput label="User Password" type="password" name="password" />

        <button className="btn bg_main_color text_main_color w-25 mt-3">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
