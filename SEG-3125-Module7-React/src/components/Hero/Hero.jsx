import './Hero.css'
import arrow_btn from '../../assets/images/arrow_btn.png'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Hero =({heroData,setHeroCount,heroCount}) => {
    const navigate = useNavigate(); // Hook for navigation
    const { t } = useTranslation();
    const navigateToMenu = () => {
    navigate('/menu'); // Define the path you want to navigate to
  };
    return (
        <div className='hero'>
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore" onClick={navigateToMenu}>
                <p>{t('hero-explore')}</p>
                <img src={arrow_btn} alt="" />
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={()=>setHeroCount(0)}  className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(1)}  className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(2)}  className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
                </ul>
            </div>
        </div>
    )
}

export default Hero