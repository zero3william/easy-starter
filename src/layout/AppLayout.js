import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';

const AppLayout = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <Header />
    <Sidebar />
    <div
      style={{
        flexGrow: 1,
        paddingTop: 64
      }}
    >
      {children}
    </div>
  </div>
);

const AppLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <AppLayout>
          <Component {...matchProps} />
        </AppLayout>
      )}
    />
  );
};

export default AppLayoutRoute;
