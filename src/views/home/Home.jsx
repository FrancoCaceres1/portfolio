/* eslint-disable no-unused-vars */
import ButtonA from "../.././assets/images/a-button.png";
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.scss";

const Home = (props) => {
  Home.propTypes = {
    option: PropTypes.number.isRequired,
    setOption: PropTypes.func.isRequired,
    selectedOption: PropTypes.number.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
  };

  const handleHover = (value) => {
    const optionMap = {
      "1": 1,
      "2": 2,
      "3": 3,
    };

    if (optionMap[value]) {
      props.setSelectedOption(optionMap[value]);
      props.setOption(optionMap[value]);
    }
  };

  return (
    <section className={styles.sectionHome}>
      <div className={styles.optionsContainer}>
        <ol className={styles.list}>
          <li
            className={props.selectedOption === 1 || props.option === 1 ? styles.selected : styles.option}
            onMouseEnter={() => handleHover("1")}
          >
            <span className={styles.hyphen}>-</span>PROJECTS
            <span
              className={
                props.selectedOption === 1 || props.option === 1
                  ? styles.buttonAContainer
                  : styles.buttonAContainerHidden
              }
            >
              <img
                src={ButtonA}
                alt="a-button"
                className={styles.buttonAImage}
              />
            </span>
          </li>
          <li className={props.selectedOption === 2 || props.option === 2 ? styles.selected : styles.option} onMouseEnter={() => handleHover("2")}>
            <span className={styles.hyphen}>-</span>
            ABOUT ME
            <span
              className={
                props.selectedOption === 2 || props.option === 2
                  ? styles.buttonAContainer
                  : styles.buttonAContainerHidden
              }
            >
              <img
                src={ButtonA}
                alt="a-button"
                className={styles.buttonAImage}
              />
            </span>
          </li>
          <li className={props.selectedOption === 3 || props.option === 3 ? styles.selected : styles.option} onMouseEnter={() => handleHover("3")}>
            <span className={styles.hyphen}>-</span>CONTACT ME
            <span
              className={
                props.selectedOption === 3 || props.option === 3
                  ? styles.buttonAContainer
                  : styles.buttonAContainerHidden
              }
            >
              <img
                src={ButtonA}
                alt="a-button"
                className={styles.buttonAImage}
              />
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Home;
