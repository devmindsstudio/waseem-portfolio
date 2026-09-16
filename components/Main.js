import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import styles from "../styles/Main.module.css";
import { AiOutlineDownCircle } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { mainFadeUpContainer, mainFadeUp, toggleFadeLeft } from "../utils/Animations";

const Main = ({ dark, setDark }) => {
  const [toggleVisibility, setToggleVisibility] = useState(false);
  const [displayTyping, setDisplayTyping] = useState(false);

  function checkMatch() {
    const x = window.matchMedia("(min-width: 800px)");
    if (!x.matches) {
      setToggleVisibility(false);
    } else {
      setToggleVisibility(true);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDisplayTyping(true);
      checkMatch();
      const handleResize = () => checkMatch();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <main className={styles.maincontainer}>
      <motion.div variants={toggleFadeLeft} className={styles.togglecontainer}>
        {toggleVisibility && <Toggle dark={dark} setDark={setDark} mobile={false} />}
      </motion.div>
      <motion.div variants={mainFadeUpContainer} className={styles.content}>
        <div className={styles.intro}>
          <motion.p variants={mainFadeUp} className={dark ? styles.hellodark : styles.hellolight}>
            Hello, my name is
          </motion.p>
          <motion.h1 variants={mainFadeUp} className={styles.name}>
            Waseem Khan.
          </motion.h1>
          <motion.div variants={mainFadeUp} className={styles.titlescontainer}>
            {displayTyping && (
              <Typewriter
                options={{
                  strings: [
                    "Senior Mobile Developer.",
                    "iOS | Android | Flutter | Swift."
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            )}
          </motion.div>
          <motion.p variants={mainFadeUp} className={styles.bio}>
            Helping startups and businesses create innovative mobile solutions.
          </motion.p>
        </div>
        <motion.div variants={mainFadeUp} className={styles.buttons}>
          <Link
            activeClass="active"
            to="contact"
            smooth={true}
            offset={-40}
            className={dark ? styles.connectbtndark : styles.connectbtnlight}
          >
            <p className={styles.connect}>Connect</p>
          </Link>
          <Link
            activeClass="active"
            to="work"
            smooth={true}
            offset={-40}
            className={dark ? styles.workbtndark : styles.workbtnlight}
          >
            <p className={styles.work}>View My Work</p>
            <AiOutlineDownCircle size={25} />
          </Link>
        </motion.div>
        {/* <motion.div variants={mainFadeUp}>
          <div className={dark ? styles.animationdark : styles.animationlight}>
            <div className={dark ? styles.circledark : styles.circlelight}></div>
          </div>
        </motion.div> */}
        <motion.div variants={mainFadeUp}>
          <div
            className={dark ? styles.animationdark : styles.animationlight}
            onClick={() => setDark(!dark)}
            style={{ cursor: "pointer" }}
          >
            <div className={dark ? styles.circledark : styles.circlelight}></div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Main;
