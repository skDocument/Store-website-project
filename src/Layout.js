import React, { useEffect, useState } from 'react';
import Header from './Layouts/Header';

const Layout = (props) => {

    return (
        <>
          <Header bg='crimson' pos='relative'/>
          {props.children}
        </>
    );
};

export default Layout;