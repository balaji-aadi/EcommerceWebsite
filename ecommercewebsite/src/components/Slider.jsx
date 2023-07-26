import React, { useState } from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../data';
import styled from 'styled-components';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition : all 1.5s ease
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClickLeft = () => {
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    }

    const handleClickRight = () => {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }

 

    return (
        <div className='slider_container'>
            <div className="arrow-left" onClick={() => handleClickLeft()}>
                <ArrowLeftIcon />
            </div>

            <Wrapper slideIndex ={slideIndex} >

                {
                    sliderItems.map(item => (
                       <Link to={`/products/${item.cat}`}><div className="slider_slide" style={{backgroundColor: `${item.bg}`}} key={item.id}>
                            <div className='slider_imgContainer'>
                                <img className='slider_image' src={item.img} alt="loading..." />
                            </div>
                            <div className='slider_infoContainer'>
                                <h1 className="slider_title">{item.title} </h1>
                                <p className="slider_desc">{item.desc} </p>
                                <button className="slider_button">SHOP NOW</button>
                            </div>
                        </div></Link> 
                    ))
                }


            </Wrapper>



            <div className="arrow-right" onClick={() => handleClickRight()}>
                <ArrowRightIcon />
            </div>


        </div>
    )
}

export default Slider
