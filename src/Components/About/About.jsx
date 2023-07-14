import React, {useEffect} from "react";
import './about.css'
import img3 from '../../Assets/i8.jpg'
import img4 from '../../Assets/i7.jpg'
import img5 from '../../Assets/i3.jpg'
import img1 from '../../Assets/i10.jpg'
import img2 from '../../Assets/i2.jpg'
import img6 from '../../Assets/i13.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const  About = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="aboutCard mtop flex_space">
          <div className="back">
            <div className="homeContent container">
                <div data-aos="fade-right" className="textDiv">
                  <h1 data-aos="fade-up" className="homeTitle">
                        "Embrace the Adventure: Unforgettable Journeys Await"
                        <br></br>
                        <br></br>
                        About Us
                    </h1>
                    <h2>
                        Our <span data-aos="fade-up">MISSION</span>
                    </h2>
                    <p>Welcome to Travel N Tourism! We are a dedicated team of travel enthusiasts passionate about creating exceptional travel experiences for our clients. Whether you're looking for a relaxing beach getaway, an adventurous trek through mountains, or a cultural immersion in vibrant cities, we have you covered.</p>
                </div>
                <div data-aos="fade-up" className="imageDiv">
                    <img src={img3} />
                    <img src={img4} />
                    <img src={img5} />
                </div>

                <div data-aos="fade-right" className='row1'>
                    <h1>
                      Why <span data-aos="fade-up">CHOOSE</span> Us
                    </h1>
                    <p>Our mission is to provide personalized and unforgettable journeys that cater to your unique preferences and interests. With our extensive network of trusted partners and local experts, we ensure that every aspect of your trip is carefully planned and executed to perfection. We believe that travel has the power to broaden horizons, create lifelong memories, and foster a deeper appreciation for the world we live in.</p>
                </div>
                <div data-aos="fade-up" className="imageDiv1">
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img6} />
                </div>
            </div>
          </div>
        </section>
        
    )
}

export default About
