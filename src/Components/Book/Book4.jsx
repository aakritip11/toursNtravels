import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './book3.css'

const Book3 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  

  return (
    <section className="account">
      <div className="accountcontent">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
          "Destination Delights: Your Ticket to Extraordinary Experiences"
          <br></br>
          <br></br>
            Account
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Details
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="details">
            {/* {userData ? ( */}
              <div className="details1">
                <h2>Thank You For Registering :)</h2>
                <p>The details of your tour as well as your ticket is being on your REGISTERED EmailID.</p>
                <br></br>
                <h3>Have a Happy Journey</h3>
              </div>
          </div>
          <div className="next">
              <button className="btn" type="submit" onClick={() => navigate("/")}>Done</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book3;
