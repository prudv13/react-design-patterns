import React from 'react'

const NumberedList = ({
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

export default NumberedList;