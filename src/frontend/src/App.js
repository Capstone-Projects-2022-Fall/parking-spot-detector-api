import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import MainPage from './pages/main/index';
import RegisterPage from './pages/register/index';
import Error404Page from './pages/error404/index';
import RegisterForm from './pages/register/form.register.js';
import CameraRegister from './pages/register/camera.register';

import { Container } from './app.styles.js';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} handleLogin={setLoggedIn} />
      <Container>
        <Routes>
          <Route exact path="/" element={
            <MainPage loggedIn={loggedIn} handleLogin={setLoggedIn} />
          } />
          <Route exact path="/register" element={
            <RegisterPage loggedIn={loggedIn} handleLogin={setLoggedIn} />
          } />
          <Route exact path="/register/form" element={
            <RegisterForm />
          } />
          {
            /* 
              NOTE: /register/camera to be redirected to from app IF
              user decides to register camera via mobile app.
            */
          }
          <Route exact path="/register/camera" element={
            <CameraRegister />
          } />
          <Route exact path="/404" element={
            <Error404Page />
          } />
          <Route exact path="*" element={
            <Navigate to="/404" />
          } />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};
