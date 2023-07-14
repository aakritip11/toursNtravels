import React, {useEffect} from "react";
import './main.css'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from "aos";
import 'aos/dist/aos.css'

const Data = [
    {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activites.',
    },

    {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Pichhu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.',
    },

    {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place.'
    },

    {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activites.',
    },

    {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright color available. Always Welcome',
    },

    {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!',
    },

    {
    id: 7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Combodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Angkot wat represents the entire range of Kheer art from the 9th to 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.',
    },

    {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'An immense mausolem of white marbel, built-in Agra by Mughal emperor Shah Jahan in the memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities.',
    },

    {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago, Bali is known for its volcanic mounatains, history, art and culture, food, temples and beautiful sandy beaches.',
    },

    // {
    // id: 10,
    // imgSrc: img10,
    // destTitle: 'Angkor Wat',
    // location: 'Combodia',
    // grade: 'CULTURAL RELAX',
    // fees: '$790',
    // description: '',
    // },

    // {
    // id: 11,
    // imgSrc: img11,
    // destTitle: 'Angkor Wat',
    // location: 'Combodia',
    // grade: 'CULTURAL RELAX',
    // fees: '$790',
    // description: '',
    // },
    
    // {
    // id: 12,
    // imgSrc: img12,
    // destTitle: 'Angkor Wat',
    // location: 'Combodia',
    // grade: 'CULTURAL RELAX',
    // fees: '$790',
    // description: '',
    // },

    // {
    // id: 13,
    // imgSrc: img13,
    // destTitle: 'Angkor Wat',
    // location: 'Combodia',
    // grade: 'CULTURAL RELAX',
    // fees: '$790',
    // description: '',
    // },

    // {
    // id: 14,
    // imgSrc: img14,
    // destTitle: 'Angkor Wat',
    // location: 'Combodia',
    // grade: 'CULTURAL RELAX',
    // fees: '$790',
    // description: '',
    // },
]

const  Main = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="main container section">
            <div className="secTitle">
            <h2>"Unforgettable Landscapes: Discover Nature's Masterpieces"</h2>
                <h3 data-aos="fade-right" className="title">
                    <br></br>
                    Most visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt="{destTitle}"/>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    {/* <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main