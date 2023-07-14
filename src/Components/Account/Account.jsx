import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './account.css'

const Account = () => {
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
  
    fetch("http://localhost:3001/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    <section className="account">
      <div className="accountcontent">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            "Travel Tales: Inspiring Your Wanderlust"
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
            {userData ? (
              <div className="details1">
                <h2>Registered User Details</h2>
                <h3>Name</h3> <p>{userData.name}</p>
                <h3>Email</h3> <p>{userData.email}</p>
                <h3>Address</h3> <p>{userData.address}</p>
                <h3>Phone</h3> <p>{userData.phone}</p>
              </div>
            ) : (
              <p>Loading user data...</p>
            )}
          </div>
          <div className="next">
              <button className="btn" type="submit" onClick={() => navigate("/")}>Done</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
