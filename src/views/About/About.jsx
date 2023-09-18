/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Download from "../.././assets/images/download.png";
import ButtonA from "../.././assets/images/a-button.png";
import ScrollButtons from "../../components/scrollButtons/ScrollButtons";
import styles from "./About.module.scss";

const About = (props) => {
  const pRef = useRef(null);

  About.propTypes = {
    setPRef: PropTypes.func.isRequired,
    handleDownload: PropTypes.func.isRequired,
    handleScrollStart: PropTypes.func.isRequired,
    handleScrollStop: PropTypes.func.isRequired,
    showArrowDown: PropTypes.bool.isRequired,
    showArrowUp: PropTypes.bool.isRequired,
  };

  useEffect(() => {
    props.setPRef(pRef.current);
  }, [props]);

  return (
    <section className={styles.sectionAbout}>
      <div className={styles.infoContainer}>
        <h1>ABOUT ME</h1>
        <div className={styles.textContainer} ref={pRef}>
          <p>
            Hey there! I&apos;m Franco, a full-stack web developer dedicated to
            the continuous improvement of my programming and problem solving
            skills. My passion for programming and web development drives me to
            learn and grow continually in this field. I enjoy tackling technical
            challenges and exploring creative solutions to complex problems,
            always with the goal of contributing to the world of web development
            while honing my skills throughout my career.
          </p>
          <div className={styles.downloadContainer}>
            <button
              className={styles.downloadCV}
              onClick={props.handleDownload}
            >
              <img
                className={styles.downloadImage}
                src={Download}
                alt="download"
              />
              DOWNLOAD CV
              <img className={styles.AButton} src={ButtonA} alt="a-button" />
            </button>
          </div>
        </div>
        <ScrollButtons
          handleScrollStart={props.handleScrollStart}
          handleScrollStop={props.handleScrollStop}
          showArrowDown={props.showArrowDown}
          showArrowUp={props.showArrowUp}
        />
      </div>
    </section>
  );
};

export default About;
