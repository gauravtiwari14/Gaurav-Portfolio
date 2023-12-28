import React from 'react'
import styles from "./Hero.module.css"
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Gaurav Tiwari</h1>
            <p className={styles.description}>
                I'm a Frontend Developer with 1 year of experience using React. Reach out if you want to know more!
            </p>
            <a className={styles.contactBtn} href="mailto:gt16633@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src="./Images/Gaurav.PNG" alt="profile picture" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero