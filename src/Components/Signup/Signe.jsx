import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Signe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setCPassword(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || name === "" || cpassword === "" || address === "" || phone === "") {
        setErrorMessage("Please fill in all the fields.");
        return;
    }
    if (password !== cpassword) {
        setPasswordMatch("Passwords do not match");
        return;
    }
    console.log(name, address, phone, email, password, cpassword);
    fetch("http://localhost:3001/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        address, 
        phone,
        email,
        password,
        cpassword,
      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Registration failed");
      }
    })
    .then((data) => {
      console.log(data, "userRegister");
      if(data.status=="ok") {
        alert("Registration Successful");
        navigate("/");
        }
        else{
          alert("User Already Exists");
          navigate("/Loge");
        }
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong during registering");
    });
    // Perform sign-in logic here
    // Validate user credentials and authenticate the user

    // Redirect to the "signe" page after successful login
  };


  return (
    <section className="loge">
      <div className="logecontent">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            "Wander, Explore, Discover: Unleash Your Inner Traveler"
            <br></br>
            <br></br>
            Account
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Register
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <form onSubmit={handleSubmit}>
            <div className="variousInput">
              <label htmlFor="name">Full Name</label>
              <div className="input flex">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full Name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <br />
              <label htmlFor="address">Address</label>
              <div className="input flex">
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>
              <br />
              <label htmlFor="phone">Phone</label>
              <div className="input flex">
                <input
                  type="number"
                  id="phone"
                  placeholder="Enter your phone no."
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              <br />
            
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
              <br />
              <label htmlFor="cpass">Confirm Password</label>
              <div className="input flex">
                <input
                  type="password"
                  id="cpass"
                  placeholder="************"
                  value={cpassword}
                  onChange={handleCPasswordChange}
                />
              </div>
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            {passwordMatch && <p>Passwords do not match</p>}
            <div className="next">
              <button className="btn" type="submit">Register</button>
              <h6>
                Already have an Account?{" "}<Link to="/Loge" onClick={() => navigate("/Loge")}replace>Login here</Link>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signe;
