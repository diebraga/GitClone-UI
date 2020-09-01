import 'react-calendar-heatmap/dist/styles.css';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from '../src/styles/GlobalStyles';
import Header from '../src/components/Header';
import Profile from '../src/pages/Profile';
import Footer from '../src/components/Footer';
import Repo from '../src/pages/Repo';

import { ThemeName, themes } from './styles/themes';

function App() {
  const [themeName, setThemeName] = useState<ThemeName>('dark');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />

          <Routes>
            <Route path="/" element={<Profile />}/>
            <Route path="/:username" element={<Profile />}/>
            <Route path="/:username/:reponame" element={<Repo />}/>
          </Routes>

        <Footer />
        <GlobalStyles />
    </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
