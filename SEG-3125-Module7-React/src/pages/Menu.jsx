import { useState } from "react";
import { useTranslation } from "react-i18next";
import garlicBread from '../assets/images/garlicbread.jpg';
import tempuraShrimp from '../assets/images/tempura.jpg';
import grilledOctopus from '../assets/images/grilledoctopus.jpg';
import naganoBurger from '../assets/images/burger.jpg';
import primeRib from '../assets/images/rib.jpg';
import blackCod from '../assets/images/blackcod.jpg';
import coffee from '../assets/images/coffee.jpg';
import red from '../assets/images/red.png';
import white from '../assets/images/white.png';
import carrot from '../assets/images/carrot.jpg';
import chocolate from '../assets/images/chocolate.jpg';
import creme from '../assets/images/Creme brulee.png';

const Menu = () => {
    const { t } = useTranslation();
    const [categories] = useState({
        Appetizers: [
            {id: 1, name: 'menu.garlic_bread', price: 12, desc:'menu.garlic_bread_desc', imgUrl: garlicBread },
            {id: 2, name: 'menu.tempura_shrimp', price: 10, desc:'menu.tempura_shrimp_desc', imgUrl: tempuraShrimp},
            {id: 3, name: 'menu.grilled_octopus', price: 15, desc:'menu.grilled_octopus_desc', imgUrl: grilledOctopus}
        ],
        entrees: [
            {id: 1, name: 'menu.nagano_burger', price: 30, desc:'menu.nagano_burger_desc', imgUrl: naganoBurger},
            {id: 2, name: 'menu.prime_rib', price: 35, desc:'menu.prime_rib_desc', imgUrl: primeRib},
            {id: 3, name: 'menu.black_cod', price: 33, desc:'menu.black_cod_desc', imgUrl: blackCod}
        ],
        Alcohol: [
            {id: 1, name: 'menu.mr_big', price: 6, desc:'menu.mr_big_desc', imgUrl: coffee},
            {id: 2, name: 'menu.white', price: 8, desc:'menu.white_desc', imgUrl: white},
            {id: 3, name: 'menu.red', price: 8, desc:'menu.red_desc', imgUrl: red}
        ],
        desert: [
            {id: 1, name: 'menu.carrot_cake', price: 12, desc:'menu.carrot_cake_desc', imgUrl: carrot},
            {id: 2, name: 'menu.chocolate_cake', price: 12, desc:'menu.chocolate_cake_desc', imgUrl: chocolate},
            {id: 3, name: 'menu.creme_brulee', price: 10, desc:'menu.creme_brulee_desc', imgUrl: creme}
        ]
    });

    return (
        <div className="menu">
            {Object.entries(categories).map(([categoryKey, items]) => (
                <div className="menu-category" key={categoryKey}>
                    <h1>{t(`menu.${categoryKey.toLowerCase()}`)}</h1>
                    {items.map((item) => (
                        <div className="menu-item" key={item.id}>
                            <div className="menu-item-pic">
                                <img src={item.imgUrl} alt={t(item.name)} />
                            </div>
                            <div className="menu-item-desc">
                                <span><h3 style={{display: 'inline'}}>{t(item.name)}</h3> / ${item.price}</span>
                                <p>{t(item.desc)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Menu;
