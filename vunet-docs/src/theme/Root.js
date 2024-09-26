import React from 'react';
import VED from '@site/src/components/VED';

function Root({ children }) {
  return (
    <>
      {children}
      <VED />
    </>
  );
}

export default Root;
