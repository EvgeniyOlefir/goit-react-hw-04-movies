import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => (
  <Loader
    type="ThreeDots"
    color="blue"
    height={200}
    width={200}
    timeout={3000}
  />
);

export default Spinner;
