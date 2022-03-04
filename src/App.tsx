import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="user/:id" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
