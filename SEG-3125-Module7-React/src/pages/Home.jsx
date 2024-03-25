import { useState } from 'react';
import Background from '../components/Background/Background';
import Hero from '../components/Hero/Hero';
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    let heroData = [
        { text1: t('home-text1'), text2: t('home-text2') },
        { text1: t('home-text3'), text2: t('home-text4') },
        { text1: t('home-text5'), text2: t('home-text6') },
    ];

    const [heroCount, setHeroCount] = useState(0);

    return (
        <div>
            <Background heroCount={heroCount} />
            <Hero
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
            />
        </div>
    );
};

export default Home;