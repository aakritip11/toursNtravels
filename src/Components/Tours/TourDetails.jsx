import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi';

const TourDetails = ({ data }) => {
  const { id } = useParams();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let tour = null;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === parseInt(id)) {
      tour = data[i];
      break;
    }
  }

  const navigate = useNavigate();

  if (!tour) {
    return <p>Tour not found.</p>;
  }

  return (
    <section className="tour-details container">
      <div className="tour-info">
        <h2>{tour.destTitle}</h2>
        <div className="tour-details-content">
          <div className="tour-image" data-aos="fade-up">
            <img src={tour.imgSrc} alt={tour.destTitle} />
          </div>
          <div className="tour-description" data-aos="fade-up">
            <h3>{tour.location}</h3>
            <p>{tour.description}</p>
            <div className="tour-details-footer">
              <div className="tour-grade">
                <span>{tour.grade}</span>
              </div>
              <div className="tour-price">
                <h5>{tour.fees}</h5>
              </div>
            </div>
          </div>
        </div>
        <button className="btn flex" onClick={() => navigate('/tours')}>
          BACK <HiOutlineClipboardCheck className="icon" />
        </button>
      </div>
    </section>
  );
};

export default TourDetails;
