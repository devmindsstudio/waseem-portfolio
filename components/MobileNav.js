import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import styles from "../styles/MobileNav.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { mobileNavFadeLeft } from "../utils/Animations";

const MobileNav = ({ mobileNav, setMobileNav, dark, setDark }) => {
  const [display, setDisplay] = useState(false);
  const [resumeExists, setResumeExists] = useState(true);

  const links = ["About", "Skills", "Work", "Contact"];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDisplay(true);

      // Check if resume file exists
      fetch("/resume.pdf", { method: "HEAD" })
        .then((res) => setResumeExists(res.ok))
        .catch(() => setResumeExists(false));
    }
  }, []);

  return (
    <div className={mobileNav ? styles.mobilenavopen : styles.mobilenav}>
      <CloseRoundedIcon
        className={styles.close}
        fontSize="large"
        onClick={() => setMobileNav(false)}
      />
      <div className={styles.textdiv}>
        {links.map((link, index) => (
          <motion.div
            custom={index}
            variants={mobileNavFadeLeft}
            animate={mobileNav ? "visible" : "hidden"}
            key={index}
          >
            <Link
              key={link}
              activeClass="active"
              to={`${link.toLowerCase()}`}
              smooth={true}
              offset={-40}
              className={styles.links}
              onClick={() => setMobileNav(false)}
            >
              <p className={styles.numbers}>0{index + 1}.</p>
              <p>{link}</p>
            </Link>
          </motion.div>
        ))}

        {/* Resume Link */}
        <motion.div
          custom={4}
          variants={mobileNavFadeLeft}
          animate={mobileNav ? "visible" : "hidden"}
        >
          <div className={styles.resumelinkcontainer}>
            <a
              href={resumeExists ? "/resume.pdf" : "#"}
              className={`${styles.resumelink} ${!resumeExists ? styles.disabled : ""}`}
              onClick={(e) => {
                if (!resumeExists) {
                  e.preventDefault(); // silently do nothing
                  return;
                }
                e.preventDefault();
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.setAttribute("download", "resume.pdf");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          custom={5}
          variants={mobileNavFadeLeft}
          animate={mobileNav ? "visible" : "hidden"}
        >
          {display && <Toggle dark={dark} setDark={setDark} mobile={true} />}
        </motion.div>
      </div>
    </div>
  );
};

export default MobileNav;