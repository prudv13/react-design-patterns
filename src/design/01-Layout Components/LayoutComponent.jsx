import React from 'react'
import SplitScreen from './SplitScreen';
import RightComponent from './RightComponent';
import LeftComponent from './LeftComponent';

const LayoutComponent = () => {
  return (
    <div>
      <SplitScreen 
        leftWeight={1}
        rightWeight={3}
      >
        <LeftComponent content='Left' />
        <RightComponent content='Right' />
      </SplitScreen>
    </div>
  )
}

export default LayoutComponent;