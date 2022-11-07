import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import MainPage from './pages/main/index';
import RegisterPage from './pages/register/index';
import Error404Page from './pages/error404/index';

export default function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Routes>
          <Route exact path="/" element={
            <MainPage />
          } />
          <Route exact path="/register" element={
            <RegisterPage />
          } />
          <Route exact path="*" element={
            <Error404Page />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
