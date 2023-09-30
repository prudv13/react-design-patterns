import React from 'react'
import LayoutComponent from './design/01-Layout Components/LayoutComponent';
import UncontrolledForm from './design/02-Controlled-Uncontrolled/UncontrolledForm';
import ControlledForm from './design/02-Controlled-Uncontrolled/ControlledForm';
import UncontrolledModal from './design/02-Controlled-Uncontrolled/UncontrolledModal';

const App = () => {
  return (
    <center>
      {/* <LayoutComponent /> */}
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      <UncontrolledModal>
        <p>This is Uncontrolled Modal</p>
      </UncontrolledModal>
    </center>
  )
}

export default App;