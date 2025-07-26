import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Model from "./Model";
import { Button } from "react-bootstrap";

const Portfolio = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (imagePath) => {
    setSelectedImage(imagePath);
    setModalShow(true);
  };

  const images = [
    "/src/assets/poert1.png",
    "src/assets/port2.png",
    "src/assets/port3.png",
    "/src/assets/poert1.png",
    "src/assets/port2.png",
    "src/assets/port3.png",
  ];

  return (
    <div className="p-5x text_secondary_color">
      <div className="d-flex flex-column align-items-center justify-content-center p-5 gap-3">
        <h2 className="fw-bolder">PORTFOLIO COMPONENT</h2>
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
                  <Button variant="" size="lg">
                    <FontAwesomeIcon icon={faPlus} size="7x" color="white" />
                  </Button>
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
