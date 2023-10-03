import React, { useState } from 'react'
import LayoutComponent from './design/01-Layout Components/LayoutComponent';
import UncontrolledForm from './design/02-Controlled-Uncontrolled/UncontrolledForm';
import ControlledForm from './design/02-Controlled-Uncontrolled/ControlledForm';
import UncontrolledModal from './design/02-Controlled-Uncontrolled/UncontrolledModal';
import ControlledModal from './design/02-Controlled-Uncontrolled/ControlledModal';
import Modals from './design/02-Controlled-Uncontrolled/Modals';
import AuthChecked from './design/03-Higher-Order-Component/Hoc';

const App = () => {

  return (
    <center>
      {/* <LayoutComponent /> */}
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}

      {/* <UncontrolledModal>
        <p>This is Uncontrolled Modal</p>
        </UncontrolledModal> */}
      
      {/* <Modals /> */}

      <AuthChecked username='Jamie' />
    </center>
  )
}

export default App;