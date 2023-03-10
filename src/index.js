import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Signin from './auth/Signin';
import Error404 from './components/Error404';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Signin/>} />
        <Route path='*' element={<Error404/>} />
        <Route path='/auth/signin' element={<Signin/>} />
        <Route path='app' element={<App/>} >
          <Route path='account/profile' element={<App/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);