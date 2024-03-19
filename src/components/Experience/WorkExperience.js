import React, { useRef } from 'react';
import './WorkExperience.css';
import { experience } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, } from "react-icons/md";

const WorkExperience = () => {

    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const sliderRight = () => {
        sliderRef.current.slickNext()
    }
    const sliderLeft = () => {
        sliderRef.current.slickPrev()
    }
    return (
        <section className='experienceContainer' id='experience'>
            <h5>Work Experiece</h5>
            <div className="experienceContent">

                <div className="arrowLeft" onClick={sliderLeft}>
                    <MdOutlineKeyboardArrowLeft size={32} />
                </div>
                <div className="arrowRight" onClick={sliderRight}>
                    <MdOutlineKeyboardArrowRight size={32} />
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {
                        experience.map((item) => (
                            <ExperienceCard key={item.title} details={item} />
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default WorkExperience