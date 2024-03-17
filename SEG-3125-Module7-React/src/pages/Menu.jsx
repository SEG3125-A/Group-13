import { useState } from "react";

const Menu = () => {
    const [categories] = useState({
        Appetizers:
        [{id: 1, name: 'Meal Item 1', price: 20, desc:'Lorem ipsum', imgUrl: 'images/chicken-alfredo-pasta.jpg'},
        {id: 2, name: 'Meal Item 2', price: 10, desc:'Lorem ipsum', imgUrl: 'images/chicken-alfredo-pasta.jpg'},
        {id: 3, name: 'Meal Item 3', price: 15, desc:'Lorem ipsum', imgUrl: 'images/chicken-alfredo-pasta.jpg'}],
        Entrées:
        [{id: 1, name: 'Meal Item 4', price: 20, desc:'Lorem ipsum', imgUrl: 'images/chicken-alfredo-pasta.jpg'},
        {id: 2, name: 'Meal Item 5', price: 10, desc:'Lorem ipsum', imgUrl: 'images/chicken-alfredo-pasta.jpg'},
        {id: 3, name: 'Meal Item 6', price: 15, desc:'Lorem ipsum', imgUrl: 'images/chicken-alfredo-pasta.jpg'}]
    });
    return (
        <div className="menu">
            {Object.keys(categories).map((category) => (
            <div className="menu-category">
                <h1>{category}</h1>
                {categories[category].map((item) => (
                    <div className="menu-item" key={item.id}>
                        <div className="menu-item-pic">
                            <img src={item.imgUrl} alt={item.name}></img>
                        </div>
                        <div className="menu-item-desc">
                            <span><h3 style={{display: 'inline'}}>{item.name}</h3> / ${item.price}</span>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            ))}
        </div>
    );
}

export default Menu;