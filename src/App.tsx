import 'react-calendar-heatmap/dist/styles.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from '../src/styles/GlobalStyles';
import Header from '../src/components/Header';
import Profile from '../src/pages/Profile';
import Footer from '../src/components/Footer';
import Repo from '../src/pages/Repo';


function App() {
  return (
    <BrowserRouter>
    <Header />

      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="/:username" element={<Profile />}/>
        <Route path="/:username/:reponame" element={<Repo />}/>
      </Routes>

    <Footer />
    <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
