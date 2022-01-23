import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

function layout({ children }) {
  return (
    <div>
      <Navbar />
      {/* <hr /> */}
      <Header />
      {children}
    </div>
  );
}

export default layout;
