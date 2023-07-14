import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './book2.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Book2 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [cityf, setCityf] = useState("");
  const [cityt, setCityt] = useState("");
  const [state, setState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [persons, setPersons] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [token, setToken] = useState(null);
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCityfChange = (e) => {
    setCityf(e.target.value);
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

  const handleCitytChange = (e) => {
    setCityt(e.target.value);
  };

  const handleDate1Change = (e) => {
    setDate1(e.target.value);
  };

  const handleDate2Change = (e) => {
    setDate2(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handlePersonsChange = (e) => {
    setPersons(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || cityt === "" || name === "" || cityf === "" || address === "" || phone === "" || date1 === "" || date2 === "" || persons === "" || country === "" || state === "") {
        setErrorMessage("Please fill in all the fields.");
        return;
    }
    console.log(name, address, phone, email, cityf, cityt, state, country, date1, date2, persons);
    fetch("http://localhost:4000/booking2", {
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
        cityf,
        cityt,
        state,
        country,
        date1,
        date2,
        persons,
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
      console.log(data, "userRegister");
      if(data.status=="ok") {
        localStorage.setItem("token", data.token);
        alert("Registration Successful");
        navigate("/book1");
      }
      else{
        alert("You are not registered");
        navigate("/book2");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong during booking");
    });
  };

  return (
    <section className="book2">
      {/* <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video> */}
      <form onSubmit={handleSubmit}>
      <div className="book2Content container">
        <div className="book2textDiv">
          <span data-aos="fade-up" className="book2smallText">
            "Where Memories are Made: Unforgettable Travel Adventures"
            <br></br>
            <br></br>
            Booking
          </span>
          <h1 data-aos="fade-up" className="book2homeTitle">
            Search your Holiday
          </h1>
        </div>
        <div data-aos="fade-up" className="book2cardDivrow grid">
            
            <div data-aos="fade-up" className="book2cardDivcol grid">
                <div className="book2inputGroup">
                    <label htmlFor="cityt">Search your city</label>
                    <div className="book2input flex">
                    <input type="text" id="cityt" value={cityt} placeholder="Enter name here" onChange={handleCitytChange} />
                    </div>
                </div>
                <div className="book2inputGroup">
                    <label htmlFor="date1">Select your FROM date</label>
                    <div className="book2input flex">
                    <input type="date" id="date1" value={date1} onChange={handleDate1Change}/>
                    </div>
                </div>
                <div className="book2inputGroup">
                    <label htmlFor="date2">Select your TO date</label>
                        <div className="book2input flex">
                        <input type="date" id="date2" value={date2} onChange={handleDate2Change}/>
                        </div>
                </div>
                <div className="book2priceInput">
                    <div className="book2label_total flex">
                        <label htmlFor="persons">No. of persons:</label>
                        {/* <h3 className="book2total">100</h3> */}
                    </div>
                    <div className="book2input flex">
                        <input type="range" max="100" min="1" id="persons" value={persons} onChange={handlePersonsChange}></input>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="book2cardDivcol grid">
              <h1>Enter Your Details</h1>
                <div className="book2inputGroup">
                    <label htmlFor="name">Full Name</label>
                    <div className="book2input flex">
                        <input type="text" id="name" value={name} placeholder="Enter name here" onChange={handleNameChange}/>
                    {/* <GrLocation className="icon" /> */}
                    </div>
                </div>
                <div className="book2inputGroup">
                    <label htmlFor="email">Email</label>
                    <div className="book2input flex">
                        <input type="email" id="email" value={email} placeholder="Enter your email" onChange={handleEmailChange}/>
                    </div>
                </div>
                <div className="book2inputGroup">
                    <label htmlFor="phone">Phone</label>
                    <div className="book2input flex">
                        <input type="number" id="phone" value={phone} placeholder="Enter your phone no." onChange={handlePhoneChange}/>
                    </div>
                </div>
                <div className="book2inputGroup">
                    <label htmlFor="address">Address</label>
                    <div className="book2input flex">
                        <input type="text" id="address" value={address} placeholder="Enter your full address" onChange={handleAddressChange}/>
                    </div>
                </div>
                <div className="book2inputGroup">
                    <label htmlFor="country">Country</label>
                    <div className="book2input flex">
                        <input type="text" id="country" value={country} placeholder="Enter your Country" onChange={handleCountryChange}/>
                    </div>
                </div>
                <div className="book2inputGroup">
                    <label htmlFor="cityf">City</label>
                    <div className="book2input flex">
                        <input type="text" id="cityf" value={cityf} placeholder="Enter your city"onChange={handleCityfChange}/>
                    </div>
                </div>
                <div className="book2inputGroup">
                    <label htmlFor="state">State</label>
                    <div className="book2input flex">
                        <input type="text" id="state" value={state} placeholder="Enter your State" onChange={handleStateChange}/>
                    </div>
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
        
            </div>
        </div>
        <div className="nextb">
            <button className="btn1" type="submit">Proceed To Payment</button>
        </div>
        </div>
      </form>
    </section>
  );
};

export default Book2;
