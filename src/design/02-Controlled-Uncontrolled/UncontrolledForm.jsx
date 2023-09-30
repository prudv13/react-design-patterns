import React, { useRef } from 'react'

const UncontrolledForm = () => {

    const nameInput = useRef();
    const ageInput = useRef();
    const hairColorInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name: nameInput.current.value,
            age: ageInput.current.value,
            hairColor: hairColorInput.current.value
        });
    }
  return (
    <form 
        className='d-flex flex-column gap-2 w-75 mt-5'
        onSubmit={handleSubmit}
    >
        <div>
            <input
                name='name'
                type='text'
                placeholder='Name'
                className='form-control'
                ref={nameInput}
            />
        </div>

        <div>
            <input
                name='age'
                type='number'
                placeholder='Age'
                className='form-control'
                ref={ageInput}
            />
        </div>

        <div>
            <input
                name='hairColor'
                type='text'
                placeholder='Hair Color'
                className='form-control'
                ref={hairColorInput}
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

export default UncontrolledForm;