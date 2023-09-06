/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import LandingPage from "./views/landingPage/LandingPage.jsx";
import Home from "./views/home/Home.jsx";
import Gameboy from "./components/gameboy/Gameboy.jsx";
import styles from "./App.module.scss";

function App() {
  const [click, setClick] = useState(false);
  const [option, setOption] = useState(1);
  const [selectedOption, setSelectedOption] = useState(1);

  const handleAnimation = (value) => {
    setClick(value);
  };

  return (
    <main className={styles.mainGameboy}>
      <section className={styles.sectionGameboy}>
        <div className={styles.viewContainer}>
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage handleAnimation={handleAnimation} click={click} />
              }
            />
            <Route
              path="/home"
              element={
                <Home
                  option={option}
                  setOption={setOption}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </section>
      <Gameboy
        handleAnimation={handleAnimation}
        click={click}
        option={option}
        setOption={setOption}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </main>
  );
}

export default App;
