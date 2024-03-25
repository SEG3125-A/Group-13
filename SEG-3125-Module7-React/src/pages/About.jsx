import './About.css';
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation();
  return (
    <div id="about" className="about">
        <h1>{t('about-us')}</h1>
        <div className="leftContainer">
          <div className="imageLeft"><img src="images/restaurant-owner.png" alt={t('about-alt')}></img></div>
          <div className="text">
            <p>{t('about-section1')}</p>
            <br></br>
            <p>{t('about-section2')}</p>
            <br></br>
            <p>{t('about-section3')}</p>
            </div>
        </div>
        <div className="rightContainer">
        <div className="text">
          <p>{t('about-section4')}</p>
          <br></br>
          <p>{t('about-section5')}</p>
        </div>
          <div className='imageRight'><img src="images/dining-room.jpg" alt={t('about-image1-alt')}></img></div>
        </div>
        <div className='leftContainer'>
          <div className="imageLeft"><img src="images/server.jpg" alt={t('about-image2-alt')}></img></div>
          <div className="text">
            <p>{t('about-section6')}</p>
            <br></br>
            <p>{t('about-section7')}</p>
          </div>
        </div>
    </div>
    );
  }
       
export default About;