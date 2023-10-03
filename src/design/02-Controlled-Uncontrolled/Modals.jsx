import React, { useState } from 'react'
import ControlledModal from './ControlledModal';

const Modals = () => {
    const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
    <div>
        <button 
        className='btn btn-dark my-4' 
        onClick={() => setShouldShowModal(!shouldShowModal)}
        >
        {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
        </button>
        <ControlledModal ControlledModal 
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
        >
        <p>This is Controlled Modal</p>
        </ControlledModal>
    </div>
  )
}

export default Modals;