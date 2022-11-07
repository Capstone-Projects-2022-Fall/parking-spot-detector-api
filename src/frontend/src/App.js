import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import './app.styles.js';

import Header from './components/header';
import Footer from './components/footer';

import MainPage from './pages/main/index';
import RegisterPage from './pages/register/index';
import Error404Page from './pages/error404/index';
import { Container } from './app.styles.js';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route exact path="/" element={
            <MainPage />
          } />
          <Route exact path="/register" element={
            <RegisterPage />
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
