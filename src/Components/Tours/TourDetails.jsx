import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './tours1.css'
import {Data} from '../../Components/Tours/Tours';

const TourDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const tour = Data.find((item) => item.id === parseInt(id));

  const navigate = useNavigate();

  if (!tour) {
    return <p>Tour not found.</p>;
  }

  return (
    <section className="tour-details container">
      <div className="tour-info" data-aos="fade-up">
        <h2>{tour.destTitle}</h2>
        <div className="tour-details-content">
          <div className="tour-image" data-aos="fade-up">
            <img src={tour.imgSrc} alt='' />
          </div>
          <div className="tour-description" data-aos="fade-up">
            <h3>{tour.location}</h3>
            <p>{tour.description}</p>
            <div className="tour-details-footer">
              {/* <div className="tour-grade">
                <span>{tour.grade}</span>
              </div> */}
              <div className="tour-price">
                <h5>Fees: {tour.fees}</h5>
              </div>
            </div>
          </div>
        </div>
        <button className="btn flex" onClick={() => navigate('/tours')}>
          BACK 
        </button>
      </div>
    </section>
  );
};

export default TourDetails;
