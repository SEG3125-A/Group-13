import { useState } from "react";

const Menu = () => {
    const [items] = useState([
        {id: 1, name: 'Meal Item 1', price: 20, imgUrl: 'images/chicken-alfredo-pasta.jpg'},
        {id: 2, name: 'Meal Item 2', price: 10, imgUrl: 'images/chicken-alfredo-pasta.jpg'},
        {id: 3, name: 'Meal Item 3', price: 15, imgUrl: 'images/chicken-alfredo-pasta.jpg'}
    ]);
    return (
        <div className="menu">
            {items.map((item) => (
                <div className="menu-item" key={item.id}>
                    <div className="menu-item-pic">
                        <img src={item.imgUrl} alt={item.name}></img>
                        <p>${item.price}</p>
                    </div>
                    <div className="menu-item-desc">
                        <h3>{item.name}</h3>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;