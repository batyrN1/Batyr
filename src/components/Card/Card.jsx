import React, { useState } from 'react';
import '../Card/Card.css'
import CountBlock from '../Button/CountBlock'; 

const Card = () => {
    const [count,setCount] = useState(0)

    return (
        <div className="container">
            <div className='card'>
                <img src="https://images.asos-media.com/products/carhartt-wip-essentials-unisex-flight-bag-in-blue/204360295-1-blue?$n_750w$&wid=750&hei=750&fit=crop" alt="" />
                <p className="title">Carhartt WIP essentials unisex flight bag in blue</p>
                <p className="desc">COLOUR:BLUE</p>
                <p className="price">£33.00</p> 
                {/* <button className='add' onClick={addBtn}>
                    Add
                </button> */}
                <CountBlock 
                count={count} 
                setCount={setCount}
                />
            </div>
        </div>
    );
}

export default Card;
