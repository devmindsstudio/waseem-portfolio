import React, { useRef } from "react";
import styles from "../styles/About.module.css";
import { MdOutlinePersonOutline } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";
import { scrollRevealFadeUp, initialScrollRevealFadeUp } from "../utils/Animations";

const About = ({ dark }) => {
  const aboutContainer = useRef(null);
  const isInView = useInView(aboutContainer);
  const animationControl = useAnimation();

  isInView ? animationControl.start(scrollRevealFadeUp) : "";

  return (
    <motion.div
      id="about"
      className={styles.aboutcontainer}
      initial={initialScrollRevealFadeUp}
      animate={animationControl}
      ref={aboutContainer}
    >
      <div className={styles.intro}>
        <MdOutlinePersonOutline size={50} className={dark ? styles.icondark : styles.iconlight} />
        <h1 className={dark ? styles.titledark : styles.titlelight}>
          <span className={dark ? styles.numberdark : styles.numberlight}>01.</span>About Me
        </h1>
      </div>
      <div className={dark ? styles.textcontainerdark : styles.textcontainerlight}>
        <p className={styles.text}>
          Hello! I&apos;m Waseem Khan, a Senior Mobile Developer with over 10 years of experience building, optimizing,
          and deploying high-performance mobile applications across iOS, Android, and cross-platform ecosystems.
          I have worked with international clients and distributed teams, delivering scalable solutions in domains
          such as EV charging, VoIP communication, IoT systems, productivity tools, workforce management, and business applications.
          My core expertise includes Swift, SwiftUI, UIKit, Kotlin, Java, and Flutter.
        </p>

        <p className={styles.text}>
          I started my professional journey after completing my Bachelor&apos;s degree in Information Technology,
          initially focusing on native iOS development. Over time, I expanded my expertise into Android development
          and cross-platform frameworks, while also strengthening my understanding of mobile architecture, API integration,
          performance optimization, and production-grade deployment workflows.
        </p>

        <p className={styles.text}>
          As my career progressed, I worked with multiple international companies and remote teams, contributing to
          a wide range of mobile applications. I specialized in building scalable applications using Swift, SwiftUI,
          UIKit, and Flutter, while applying modern architectural patterns like MVVM and Clean Architecture.
          I also gained strong experience in App Store and Google Play Store deployment, CI/CD workflows, and release management.
        </p>

        <p className={styles.text}>
          In recent roles, I have worked as a Lead Mobile App Developer, where I design mobile architectures,
          establish engineering standards, conduct code reviews, mentor developers, and manage end-to-end delivery
          of mobile applications. I have led teams across multiple time zones, ensuring timely delivery and high-quality
          product outcomes while collaborating closely with product and design teams.
        </p>

        <p className={styles.text}>
          I have contributed to several impactful products including EV charging platforms, VoIP calling applications,
          IoT monitoring systems, workforce management platforms, and community-based applications. These experiences
          have strengthened my ability to solve complex technical challenges, build scalable systems, and deliver
          smooth user experiences across multiple platforms.
        </p>

        <p className={styles.lasttext}>
          Currently, I continue to focus on building high-quality mobile applications and leading development teams.
          I am passionate about clean architecture, performance optimization, scalable system design, and continuously
          improving both product quality and team productivity while delivering real value to users.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
