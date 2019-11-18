import React, {useState} from 'react';

const Price = props => {
  
  const array = props.value.toString().split('.');
  const dollar = array[0];
  const cent = array[1];
  return (
    <div className='price__main'>
      ${dollar}
      <div className='price__secondary'>
        {cent}
      </div>
      
    </div>
  );
};

export default Price;
