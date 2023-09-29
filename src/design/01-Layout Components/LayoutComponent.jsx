import React from 'react'
import SplitScreen from './SplitScreen';
import RightComponent from './RightComponent';
import LeftComponent from './LeftComponent';

const LayoutComponent = () => {
  return (
    <div>
      <SplitScreen 
        left={LeftComponent} 
        right={RightComponent}
      />
    </div>
  )
}

export default LayoutComponent;