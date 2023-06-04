import React from 'react';

const CountBlock = (props) => {
    const {count , setCount} = props
       // // const addBtn = () =>{
        
    // // }
    const increment = () => {
        setCount(count + 1)
    }
    const dicrement = () =>{
        setCount(count <= 0 ? count : count - 1) 
    }

    return (
        <div>
             <div className="block_cart">
                     <button  class="button-36" role="button" onClick={dicrement}>-</button>
                     <p className="count_title">{count}</p>
                     <button class="button-36" role="button" onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default CountBlock ;
