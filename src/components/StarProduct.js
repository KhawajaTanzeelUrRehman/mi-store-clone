import React from 'react';
import "../styles/StarProduct.css";

const StarProduct = ({ StarProducts }) => {
    return (
        <div className='starProduct'>
            <div><a href={StarProducts[0].url}><img src={StarProducts[0].image} alt="1st Product" /></a></div>
            <div>
                <a href={StarProducts[1].url}> <img src={StarProducts[1].image} alt="1st Product" /></a>
                <a href={StarProducts[2].url}> <img src={StarProducts[2].image} alt="1st Product" /></a>
                <a href={StarProducts[3].url}> <img src={StarProducts[3].image} alt="1st Product" /></a>
            </div>
        </div>
    )
}

export default StarProduct
