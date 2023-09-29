import React from 'react'

const LargeProductListItem = ({product}) => {
  const {name, price, description, rating} = product;
  return (
  <div className='card p-2'>
    <div className='d-flex flex-column gap-1 form-control mb-2'>
      <span>Name: {name}</span>
      <span>Price: ${price}</span>
      <span>{description}</span>
      <span>Rating: {rating}</span>
    </div>
  </div>
)
}

export default LargeProductListItem;