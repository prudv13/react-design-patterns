import React from 'react'
import SplitScreen from './SplitScreen';
import RightComponent from './RightComponent';
import LeftComponent from './LeftComponent';
import RegularList from './RegularList';
import SmallPersonListItem from './people/SmallPersonListItem';
import people from '../../../utils/people';
import LargePersonListItem from './people/LargePersonListItem';

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

      <div>
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={SmallPersonListItem}
        />
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={LargePersonListItem}
        />
      </div>
    </div>
  )
}

export default LayoutComponent;