import Sidebar from './inc/Sidebar';
import Header from './inc/Header';
import Umenu from './inc/Umenu';
import Footer from './inc/Footer';
import ThemeSelector from './inc/ThemeSelector';
import Home from './home/Home';
import Profile from './account/Profile';

import 'boxicons'
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      {/* Start Wrapper */}
      <div className="wrapper">
        {/* SIDEBAR */}
          <Sidebar/>
        {/* /SIDEBAR */}
        {/* HEADER */}
          <Header/>
        {/* /HEADER */}
        <Routes>
        {/* ====== COMPONNENTS */}
          <Route index element={ <Home/> } />
          <Route path='account/profile' element={ <Profile/> } />
        {/* ====== COMPONNENTS */}
        </Routes>
        {/* UMENU */}
          <Umenu/>
        {/* /UMENU */}

        {/* FOOTER */}
          <Footer/>
        {/* /FOOTER */}

      </div>
      {/* end wrapper */}

      {/* THEME SELECTOR */}
        <ThemeSelector/>
      {/* THEME SELECTOR */}
    </>
  )
};
