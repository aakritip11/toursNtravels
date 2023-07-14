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

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage
  
    fetch("http://localhost:4000/booked", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch user data");
        }
      })
      .then((data) => {
        if (data.status === "ok") {
          setUserData(data.data); // Store the fetched user data in state
        } else {
          throw new Error("User not found");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong while fetching user data");
      });
  };
  

  return (
    <section className="book">
      <div className="bookcontent">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            "Let Your Journey Begin: Curated Travel Experiences"
            <br></br>
            <br></br>
            BOOKING
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Details
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv1 grid">
          <div className="details">
            {userData ? (
              <div className="details1">
                <h2>Visitor Details</h2>
                <h3>Name</h3> <p>{userData.name}</p>
                <h3>Email</h3> <p>{userData.email}</p>
                <h3>Address</h3> <p>{userData.address}</p>
                <h3>Phone</h3> <p>{userData.phone}</p>
                <h3>Country</h3> <p>{userData.country}</p>
                <h3>State</h3> <p>{userData.state}</p>
                <h3>City</h3> <p>{userData.cityf}</p>
                <br></br>
                <br></br>
                <h2>Your Tour Details</h2>
                <h3>City</h3> <p>{userData.cityt}</p>
                <h3>Tour Date (FROM)</h3> <p>{userData.date1}</p>
                <h3>Tour Date (TO)</h3> <p>{userData.date2}</p>
                <h3>No. of persons</h3> <p>{userData.persons}</p>
              </div>
            ) : (
              <p>Loading user data...</p>
            )}
          </div>
          <div className="next">
              <button className="btn" type="submit" onClick={() => navigate("/book4")}>Done</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book3;
