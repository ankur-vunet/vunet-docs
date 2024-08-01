import React from 'react';
import Layout from '@theme-original/Layout';
import ScrollToHash from '../components/ScrollToHash';

function CustomLayout(props) {
  return (
    <>
      <ScrollToHash />
      <Layout {...props} />
    </>
  );
}

export default CustomLayout;
