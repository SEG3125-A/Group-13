import './Background.css'
import React from 'react';
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.webp'
import image3 from '../../assets/images/image3.jpeg'

const Background = ({heroCount}) => {
    if (heroCount===0) {
        return <img src={image1} className='background' alt="" />
    }
    else if(heroCount===1) 
    {
        return <img src={image2} className='background' alt="" />
    }
    else if(heroCount===2) 
    {
        return <img src={image3} className='background' alt="" />
    }
}

export default Background