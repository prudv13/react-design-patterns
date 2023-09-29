import React from 'react'

const SmallProductListItem = ({product}) => {
  const {name, price} = product;
return (
  <div className='form-control'>
      <p>Name: {name}</p>
      <p>Price: $ {price} years</p>
  </div>
)
}

export default SmallProductListItem;