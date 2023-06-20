import React, { useCallback, useEffect, useState } from 'react';
import Sidebar, { DotSVG } from './components/SideBar';
import Header from './components/Header';
import MainContent from './components/content/MainContent';
import ContentHeader from './components/content/ContentHeader';

const app = () => {
  return (
    <div className="bg-white md:w-screen  relative flex flex-row ">
      <Sidebar />
      <div className="flex flex-col bg-white  md:absolute md:right-0  sm:md:w-4/5 w-full h-screen pl-12 pr-10 md:pl-5 md:pr-5  ">
        <Header />
        <ContentHeader />
        <MainContent />
      </div>
    </div>
  );
};

export default app;
