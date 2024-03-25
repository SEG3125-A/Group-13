import { useState } from 'react';
import Background from '../components/Background/Background';
import Hero from '../components/Hero/Hero';
import { useTranslation } from "react-i18next";
const Home = () => {
    
    let heroData = [
        {text1:"Dive into", text2:"what you love"},
        {text1:"Indulge", text2:"your passions"},
        {text1:"Give in to", text2:"what tastes good"},
    ]
    const [heroCount,setHeroCount] = useState(0);
    return (
        <div>
            <Background heroCount={heroCount}/>
            <Hero
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
            />
        </div>
    )
}
export default Home;