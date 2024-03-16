import { useState } from "react";

const Menu = () => {
    const [items] = useState([
        {id: 1, name: 'Meal Item 1', price: 20, imgUrl: ''},
        {id: 2, name: 'Meal Item 2', price: 10, imgUrl: ''},
        {id: 3, name: 'Meal Item 3', price: 15, imgUrl: ''}
    ]);
    return (
        <div className="menu">
            {items.map((item) => (
                <div className="menu-item" key={item.id}>
                    <p>{item.name} - ${item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Menu;