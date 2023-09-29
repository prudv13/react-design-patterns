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
        leftWeight={1}
        rightWeight={3}
      />
    </div>
  )
}

export default LayoutComponent;