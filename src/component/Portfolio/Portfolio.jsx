import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Model from "./Model";
import { Button } from "react-bootstrap";
import port1 from "./../../assets/poert1.png";
import port2 from "./../../assets/port2.png";
import port3 from "./../../assets/port3.png";

const Portfolio = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (imagePath) => {
    setSelectedImage(imagePath);
    setModalShow(true);
  };

  const images = [port1, port2, port3, port1, port2, port3];

  return (
    <div className="p-5x text_secondary_color">
      <div className="d-flex flex-column align-items-center justify-content-center p-5 gap-3">
        <h2 className="fw-bolder text-center">PORTFOLIO COMPONENT</h2>
        <div className="position-relative star2">
          <FontAwesomeIcon icon={faStar} />
        </div>

        <div className="row g-3 mx-4">
          {images.map((img, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="position-relative rounded-2 overflow-hidden portfolio-box">
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="img-fluid w-100 d-block"
                />

                <div
                  className="overlay d-flex align-items-center justify-content-center"
                  onClick={() => handleOpenModal(img)}
                >
                  <FontAwesomeIcon icon={faPlus} size="7x" color="white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Model
        show={modalShow}
        onHide={() => setModalShow(false)}
        imageSrc={selectedImage}
      />
    </div>
  );
};

export default Portfolio;
