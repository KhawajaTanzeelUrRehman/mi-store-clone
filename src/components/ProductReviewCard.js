import React from 'react'
import "../styles/ProductReviewCard.css"
const ProductReviewCard = ({ index, price, name, image, review }) => {
    return (
        <div className='ProductReviewCard'>
            <img src={image} alt={`Review ${index}`} />
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
        </div>
    )
}

export default ProductReviewCard
