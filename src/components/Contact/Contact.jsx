import React from "react";
import styles from "./Contact.module.css";


const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Reach out to me!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="emailIcon.png" alt="Email icon" />
          <p>gt16633@gmail.com</p>
        </li>
        <li className={styles.link}>
          <img
            src="linkedinIcon.png"
            alt="LinkedIn icon"
          />
        <p>linkedin.com/in/gaurav-tiwari-99820424a/</p>
        </li>
        <li className={styles.link}>
          <img src="githubIcon.png" alt="Github icon" />
          <p>github.com/gauravtiwari14</p>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;