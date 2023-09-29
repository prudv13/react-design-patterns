import React from 'react'

const SmallPersonListItem = ({person}) => {
    const {name, age} = person;
  return (
    <div className='form-control'>
        <p>Name: {name}</p>
        <p>Age: {age} years</p>
    </div>
  )
}

export default SmallPersonListItem;