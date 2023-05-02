import React from 'react';
import Header from './Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="md:min-h-[calc(100vh-360px)] bg-gray-900 text-gray-400 py-10">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
