import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="./Images/aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h2>Frontend Developer</h2>
              <p>
                Hello, I'm Gaurav Tiwari and I'm a passionate Frontend Developer with 1 year of
                experience using Javascript and ReactJS. I design and code highly responsive 
                websites. Checkout my work below and feel free to get in touch with me.  
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h2>My Skills</h2>
              <p>
                HTML , CSS , JAVASCRIPT , REACT , REACT ROUTER , REDUX TOOLKIT , TAILWIND ,
                GIT AND GITHUB.   
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;