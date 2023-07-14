import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Loge = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState("false");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("Please fill in all the fields.");
      return;
    }
  
    fetch("http://localhost:3001/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        if (data.token) {
          // Store the token in localStorage
          localStorage.setItem("token", data.token);
          setAuthenticated(true);
          navigate("/Account");
        } else {
          throw new Error("Token not received");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong during login");
      });
  };
  
  // Fetch user data when the component mounts or when the token changes
  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token]);

  const fetchUserData = () => {
    fetch("http://localhost:3001/userdata", {
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

  return (
    <section className="loge">
      <div className="logecontent">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
          "Tailored Travel Experiences: Creating Your Perfect Journey"
            <br></br>
            <br></br>
            Account
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Login
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <form onSubmit={handleSubmit}>
            <div className="variousInput">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <br />
              <label htmlFor="pass">Password</label>
              <div className="input flex">
                <input
                  type="password"
                  id="pass"
                  placeholder="************"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div className="next">
              <button className="btn" type="submit">Login</button>
              <h6>
                Don't have an Account?{" "}
                <Link to="/Signe" onClick={() => navigate("/Signe")} replace>
                  Register here
                </Link>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Loge;
