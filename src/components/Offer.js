import React from 'react'


const Offer = ({ src, link, index }) => {
    return (
        <a href={link}><img src={src} alt={`Offer ${index} `}></img></a>
    )
}

export default Offer
