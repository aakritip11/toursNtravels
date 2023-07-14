import React, {useEffect, useState} from "react";
import './home.css'
import video from '../../Assets/video2.mp4'
import {GrLocation} from 'react-icons/gr'
import {FiFacebook} from 'react-icons/fi'
import {SiTripadvisor} from 'react-icons/si'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'

const  Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const [isPhotoMoving, setIsPhotoMoving] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsPhotoMoving(true);
        }, 2000); // Adjust the delay as needed (in milliseconds)

        return () => clearTimeout(timer);
    }, []);
    
    return(
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search your Holiday
                    </h1>
                </div>
                {/* <div className={`photo-line ${isPhotoMoving ? 'move' : ''}`}>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                {/* </div> */} 
                <div data-aos="fade-up" className="textDiv1">
                <span data-aos="fade-up" className="smallText">
                    ............Unleash Your Wanderlust............
                </span>
                <h1 data-aos="fade-up" className="homeTitle">
                Unforgettable Travel and Tourism Experiences
                </h1>
                    {/* <div className="destinationInput">
                        <label htmlFor="city">Search your city</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here"></input>
                            <GrLocation className="icon"/>
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">Select your date</label>
                        <div className="input flex">
                            <input type="date"></input>
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000"></input>
                        </div>
                    </div> */}
                    <div className="searchOptions flex">
                        <span>EXPLORE MORE</span>
                    </div>
                 </div> 
                {/* <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <AiOutlineInstagram className="icon"/>
                        <SiTripadvisor className="icon"/>
                    </div>
                    <div className="leftIcons">
                    <BsListTask className="icon"/>
                    <TbApps className="icon"/>
                    </div>
                </div> */}
            </div>

        </section>
    )
}

export default Home