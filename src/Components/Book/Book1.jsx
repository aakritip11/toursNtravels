import React, { useEffect, useState } from "react";
import "./book1.css";
import { Link, useNavigate } from "react-router-dom";
import img15 from'../../Assets/img15.jpg'

import Aos from "aos";
import "aos/dist/aos.css";

const Book1 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [cname, setCname] = useState("");
  const [cnumber, setCnumber] = useState("");
  const [cmonth, setCmonth] = useState("");
  const [cyear, setCyear] = useState("");
  const [cvv, setCvv] = useState("");
  const [authenticated, setAuthenticated] = useState("false");
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleCnameChange = (e) => {
    setCname(e.target.value);
  };

  const handleCnumberChange = (e) => {
    setCnumber(e.target.value);
  };

  const handleCmonthChange = (e) => {
    setCmonth(e.target.value);
  };

  const handleCyearChange = (e) => {
    setCyear(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  // const handleProceed = () => {
  //   navigate("/book3");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone === "" || cname === "" || cnumber === "" || cmonth === "" || cyear === "" || cvv === "") {
      setErrorMessage("Please fill in all the fields.");
      return;
    }
    fetch("http://localhost:4000/booking1", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        phone,
        cname,
        cnumber,
        cmonth,
        cyear,
        cvv,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Booking failed");
        }
      })
      .then((data) => {
        if (data.token) {
          // Store the token in localStorage
          localStorage.setItem("token", data.token);
          setAuthenticated(true);
          navigate("/book3");
        } else {
          throw new Error("Token not received");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong during booking");
      });
  };
  
  // Fetch user data when the component mounts or when the token changes
  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token]);

  const fetchUserData = () => {
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
      console.log(data);
      if (data.status === "ok") {
        // Handle the received user data as needed
        console.log("User data:", data.data);
      } else {
        throw new Error("User not found");
      }
    })
    .catch((error) => {
      console.error(error);
      setErrorMessage("Something went wrong while fetching user data");
    });
  };
  
  // Fetch user data when the component mounts or when the token changes
  

  return (
    <section className="book1">
      {/* <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video> */}
      <div className="book1Content container">
        <div className="book1textDiv">
          <span data-aos="fade-up" className="book1smallText">
            "Travel Beyond Limits: Uncover Extraordinary Destinations"
            <br></br>
            <br></br>
            Booking
          </span>
          <h1 data-aos="fade-up" className="book1homeTitle">
            Card Details
          </h1>
        </div>
        <div data-aos="fade-up" className="book1cardDiv grid">
        <form onSubmit={handleSubmit}>
        <div className="book1inputGroup">
                <label htmlFor="name">Cards Accepted</label>
                <img src={img15}  alt="" />
        </div>
            <div className="book1inputGroup">
                <label htmlFor="phone">Card Holder's Phone</label>
                <div className="book1input flex">
                <input type="number" id="phone" placeholder="Enter the card holder's phone number" onChange={handlePhoneChange} />
                </div>
            </div>
            <div className="book1inputGroup">
                <label htmlFor="cname">Card Holder's Name</label>
                <div className="book1input flex">
                <input type="text" id="cname" placeholder="Enter the card holder's name" onChange={handleCnameChange} />
                </div>
            </div>
            <div className="book1inputGroup">
                <label htmlFor="cnumber">Card Number</label>
                <div className="book1input flex">
                <input type="number" id="cnumber" value={cnumber} placeholder="Enter the card number" onChange={handleCnumberChange}/>
                </div>
            </div>
            <div className="book1inputGroup">
                <label htmlFor="cmonth">Exp. Month</label>
                <div className="book1input flex">
                <input type="number" id="cmonth" value={cmonth} placeholder="Enter the expiry month" onChange={handleCmonthChange}/>
                </div>
            </div>
            <div className="book1inputGroup">
                <label htmlFor="cyear">Exp. Year</label>
                <div className="book1input flex">
                <input type="number" id="cyear" value={cyear} placeholder="Enter the expiry year" onChange={handleCyearChange}/>
                </div>
            </div>
            <div className="book1inputGroup">
                <label htmlFor="cvv">CVV</label>
                <div className="book1input flex">
                <input type="number" id="cvv" value={cvv} placeholder="***" onChange={handleCvvChange}/>
                </div>
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="nextb">
              <button className="btn1" type="submit">Proceed To Checkout</button>
            </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Book1;
