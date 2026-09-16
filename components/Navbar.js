import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Logo from "./Logo";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navFadeDownContainer, navFadeDown } from "../utils/Animations";

const Navbar = ({ setMobileNav, setShowLogoAnimation }) => {
  const [hamburgerVisible, setHamburgerVisible] = useState(false);
  const [resumeExists, setResumeExists] = useState(true);

  function checkMatch() {
    const x = window.matchMedia("(min-width: 800px)");
    if (!x.matches) {
      setHamburgerVisible(true);
    } else {
      setHamburgerVisible(false);
    }
  }

  useEffect(() => {
    checkMatch();

    // check if resume file exists
    fetch("/resume.pdf", { method: "HEAD" })
      .then((res) => setResumeExists(res.ok))
      .catch(() => setResumeExists(false));

    const handleResize = () => checkMatch();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = ["About", "Skills", "Work", "Contact"];

  return (
    <div id="home" className={styles.container}>
      <div className={styles.navcontainer}>
        <Logo
          logo={"portfolio"}
          animation={true}
          setShowLogoAnimation={setShowLogoAnimation}
        />
        <motion.div variants={navFadeDownContainer} className={styles.linkcontainer}>
          {links.map((link, index) => (
            <motion.div variants={navFadeDown} key={index}>
              <Link
                key={index}
                activeClass="active"
                to={`${link.toLowerCase()}`}
                smooth={true}
                offset={-40}
                className={styles.links}
              >
                <p className={styles.numbers}>0{index + 1}.</p>
                <p>{link}</p>
              </Link>
            </motion.div>
          ))}

          {/* Resume link */}
          <motion.div variants={navFadeDown}>
            <a
              href={resumeExists ? "/resume.pdf" : "#"}
              className={`${styles.resumelink} ${!resumeExists ? styles.disabled : ""}`}
              onClick={(e) => {
                if (!resumeExists) {
                  e.preventDefault();
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
          </motion.div>
        </motion.div>

        {hamburgerVisible && (
          <motion.div variants={navFadeDown}>
            <MenuRoundedIcon
              className={styles.hamburger}
              fontSize="large"
              onClick={() => setMobileNav(true)}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;