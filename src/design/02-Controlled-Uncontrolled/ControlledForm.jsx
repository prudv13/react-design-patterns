import React, { useEffect, useState } from 'react'

const ControlledForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hairColor, setHairColor] = useState('');

    const [nameInputError, setNameInputError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name: name,
            age: age,
            hairColor: hairColor
        });
    }

    useEffect(() => {
        if(name.length < 2){
            setNameInputError('Name must be two or more characters');
        }
        else {
            setNameInputError('');
        }
    }, [name]);

  return (
    <form 
        className='d-flex flex-column gap-2 w-75 mt-5'
        onSubmit={handleSubmit}
    >
        <div>
            {nameInputError && <p>{nameInputError}</p>}
            <input
                name='name'
                type='text'
                placeholder='Name'
                className='form-control'
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>

        <div>
            <input
                name='age'
                type='number'
                placeholder='Age'
                className='form-control'
                value={age}
                onChange={e => setAge(e.target.value)}
            />
        </div>

        <div>
            <input
                name='hairColor'
                type='text'
                placeholder='Hair Color'
                className='form-control'
                value={hairColor}
                onChange={e => setHairColor(e.target.value)}
            />
        </div>

        <div>
            <input
                type='submit'
                value='Submit'
                className='btn btn-dark'
            />
        </div>

    </form>
  )
}

export default ControlledForm;