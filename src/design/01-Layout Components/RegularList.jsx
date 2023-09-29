import React from 'react'

const RegularList = ({
    items, 
    resourceName,
    itemComponent: ItemComponent,
}) => {
  return (
    <div className='grid-container'>
        {
            items.map((item, i) => (
                <ItemComponent key={i} {...{[resourceName]: item}} />
            ))
        }
    </div>
  )
}

export default RegularList;