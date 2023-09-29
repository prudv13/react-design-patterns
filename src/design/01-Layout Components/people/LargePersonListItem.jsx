import React from 'react'

const LargePersonListItem = ({person}) => {
  const {name, age, hairColor, hobbies} = person;
return (
  <div className='card p-2'>
    <div className='d-flex flex-column gap-1 form-control mb-2'>
      <span>Name: {name}</span>
      <span>Age: {age} years</span>
      <span>Hair Color: {hairColor}</span>
    </div>
    <div className='form-control'>
      <p className='text-start'>Hobbies:</p>
      <ul className='d-flex flex-column align-items-start px-3'>
      {
        hobbies.map(hobby => <li className='btn btn-info m-2' style={{listStyle: 'none'}} key={hobby}>{hobby}</li>)
      }
      </ul>
    </div>
  </div>
)
}

export default LargePersonListItem;