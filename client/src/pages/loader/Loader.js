import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import css from './Loader.css';

const Loader = () => (
  <div className='loader'>
    <ClipLoader
      sizeunit={"px"}
      size={150}
      color={'#3454D1'}
      loading={true}
    />
    Loading 😒
  </div>
);

export default Loader
