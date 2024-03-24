import { Link } from 'react-router-dom';
import './Navbar.css';

import { useTranslation } from "react-i18next";

const LANGUAGES = [
    { label: "English", code: "en" },
    { label: "Français", code: "fr" },
];

const Navbar = () => {
    const { i18n, t } = useTranslation();

    const onChangeLang = (event) => {
        const newLanguage = event.target.value;
        console.log("Changing language to:" + newLanguage);
        i18n.changeLanguage(newLanguage);
    } 

    return (
    <nav className="navbar">
        <h1 className="title">The Big Fork</h1>
        <div className="navbar-divider"></div>
        <ul className="navbar-links">
            <li className="links"><Link to="/">{t("home")}</Link></li>
            <li className="links"><Link to="/menu">{t("menu")}</Link></li>
            <li className="links"><Link to="/about">{t("about")}</Link></li>
            <li className="links"><Link to="/faq">{t("faq")}</Link></li>
        </ul>
        <select className="lang-select" defaultValue={i18n.language} onChange={onChangeLang}>
            {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
                {label}
            </option>
            ))}
        </select>
        <div className="navbar-divider"></div>
        <div className="navbar-book">
            <Link to="/reserve" className="book">{t("book-table")}</Link>
        </div>
    </nav>
    );
};

export default Navbar;