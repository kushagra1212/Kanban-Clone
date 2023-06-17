import React from 'react';
import Sidebar, { DotSVG } from './components/SideBar';
import Header from './components/Header';
import { ConentSection } from './components/content/ContentSection';

const app = () => {
  return (
    <div className="bg-white h-screen w-screen relative">
      <Sidebar />
      <Header />
      <ConentSection />
    </div>
  );
};

export default app;
