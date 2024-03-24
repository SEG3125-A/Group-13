import './FAQ.css'; // Make sure you have the corresponding CSS file
import Accordion from '../components/Accordion';
// accordion tutorial from: https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/

import { useTranslation } from "react-i18next";

const FAQ = () => {
    const { t } = useTranslation();
    const accordionDataReservations = [
        {
            title: 'faq-q1',
            content: 'faq-a1'
        },
        {
            title: 'faq-q2',
            content: 'faq-a2'
        },
        {
            title: 'faq-q3',
            content: 'faq-a3'
        }
    ];

    const accordionDataMenu = [
        {
            title: 'faq-q4',
            content: 'faq-a4'
        },
        {
            title: 'faq-q5',
            content: 'faq-a5'
        }
    ];

    const accordionDataRestrictions = [
        {
            title: 'faq-q6',
            content: 'faq-a6'
        },
        {
            title: 'faq-q7',
            content: 'faq-a7'
        }
    ];

    return (
        <div className="faq">
            <h1>{t("faq-heading")}</h1>
            <br></br>
            <h2>{t("faq-section1")}</h2>
            <div className="accordion">
                {accordionDataReservations.map(({ title, content }) => (
                    <Accordion title={t(title)} content={t(content)} />
                ))}
            </div>
            <h2>{t("faq-section2")}</h2>
            <div className="accordion">
                {accordionDataMenu.map(({ title, content }) => (
                    <Accordion title={t(title)} content={t(content)} />
                ))}
            </div>
            <h2>{t("faq-section3")}</h2>
            <div className="accordion">
                {accordionDataRestrictions.map(({ title, content }) => (
                    <Accordion title={t(title)} content={t(content)} />
                ))}
            </div>
            <h1>{t("faq-morequestions")}</h1>
            <br></br>
            <p>{t("faq-chat", { 'chat-button': t("chat-open") })}</p>
        </div>
    );
}
 
export default FAQ;