import React, { useState } from 'react'
import LayoutComponent from './design/01-Layout Components/LayoutComponent';
import UncontrolledForm from './design/02-Controlled-Uncontrolled/UncontrolledForm';
import ControlledForm from './design/02-Controlled-Uncontrolled/ControlledForm';
import UncontrolledModal from './design/02-Controlled-Uncontrolled/UncontrolledModal';
import ControlledModal from './design/02-Controlled-Uncontrolled/ControlledModal';

const App = () => {

  const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
    <center>
      {/* <LayoutComponent /> */}
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}

      {/* <UncontrolledModal>
        <p>This is Uncontrolled Modal</p>
        </UncontrolledModal> */}
      
      <button 
        className='btn btn-dark my-4' 
        onClick={() => setShouldShowModal(!shouldShowModal)}
      >
      {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
      </button>
      <ControlledModal 
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <p>This is Controlled Modal</p>
      </ControlledModal>
    </center>
  )
}

export default App;