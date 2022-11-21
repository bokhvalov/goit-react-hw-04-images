import React from 'react';
import { Blocks } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Blocks height="160" width="160" />
    </div>
  );
};
