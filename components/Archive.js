import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import styles from "../styles/Archive.module.css";
import Socials from "./Socials";
import ReturnHome from "./ReturnHome";
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  archiveFadeDownContainer,
  archiveFadeDownContainer2,
  archiveFadeDownContainer3,
  archiveFadeDownContainer4,
  archiveFadeDownContainer5,
  archiveFadeDown,
  archiveFadeRight,
  arrowFadeDownContainer,
  arrowFadeDown,
} from "../utils/Animations";

const data = {
  personalProjects: [
    {
      name: "Faver",
      date: "2015",
      technologies: ["Swift", "UIKit"],
      site: "https://apps.apple.com/us/app/faver-app/id1046790267",
      github: "",
    },
    {
      name: "Brunata Online Residents",
      date: "2017",
      technologies: ["Swift", "UIKit"],
      site: "https://apps.apple.com/us/app/brunata-online-residents/id1284513547",
      github: "",
    },
    {
      name: "EquiLoco",
      date: "2019",
      technologies: ["Swift", "UIKit"],
      site: "https://apps.apple.com/us/app/equiloco/id1476502330",
      github: "",
    },
    {
      name: "Microbizz 3",
      date: "2019",
      technologies: ["Swift", "UIKit"],
      site: "https://apps.apple.com/us/app/microbizz-3/id1481072534",
      github: "",
    },
    {
      name: "Power Fuel",
      date: "2021",
      technologies: ["Swift", "UIKit"],
      site: "https://apps.apple.com/dk/app/power-fuel/id1534844918",
      github: "",
    },
    {
      name: "QwikPark Parking",
      date: "2020",
      technologies: ["Swift", "UIKit"],
      site: "https://apps.apple.com/gb/app/qwikpark-parking/id1514669496",
      github: "",
    },
    {
      name: "AeroGuard",
      date: "2023",
      technologies: ["Swift", "SwiftUI"],
      site: "https://apps.apple.com/us/app/aeroguard/id6446806084",
      github: "",
    },
    {
      name: "Green School",
      date: "2023",
      technologies: ["Swift", "UIKit"],
      site: "https://apps.apple.com/us/app/green-school/id1668307092",
      github: "",
    },
    {
      name: "Jobsinflow",
      date: "2024",
      technologies: ["Swift", "SwiftUI"],
      site: "https://apps.apple.com/ch/app/jobsinflow/id6463372634",
      github: "",
    },
  ],
  bloomtechPRs: [],
  bloomtechProjects: [],
  bloomtechSprints: [],
};

const Archive = () => {
  const [isDark, setIsDark] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(window.localStorage.getItem("theme"));
    }
  }, []);

  const labels = ["", "Year", "Name", "Category", "Technologies", "Link"];

  const handleBack = () => router.push("/projects/xpeats");
  const handleForward = () => router.push("/");

  return (
    <div className={isDark === "dark" ? styles.fulldark : styles.fulllight}>
      <div className={styles.container}>
        <div className={styles.archivecontainer}>
          <div className={styles.headercontainer}>
            <motion.div variants={archiveFadeRight} className={styles.titlecontainer}>
              <h1 className={styles.title}>Project Archive</h1>
              <p className={styles.about}>A record of the work I&apos;ve done.</p>
            </motion.div>
            <motion.div variants={arrowFadeDownContainer} className={styles.arrowcontainer}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={arrowFadeDown}
                onClick={handleBack}
                className={isDark === "dark" ? styles.backdark : styles.backlight}
              >
                <BsArrowLeftShort fontSize={35} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={arrowFadeDown}
                onClick={handleForward}
                className={isDark === "dark" ? styles.forwarddark : styles.forwardlight}
              >
                <BsArrowRightShort fontSize={35} />
              </motion.div>
            </motion.div>
          </div>

          <div className={styles.archive}>
            <motion.div variants={archiveFadeDownContainer} className={styles.labelcontainer}>
              {labels.map((label, i) => {
                if (label === "Category" || label === "Technologies") {
                  return (
                    <motion.div
                      variants={archiveFadeDown}
                      className={label === "Category" ? styles.categorylabel : styles.techlabel}
                      key={i}
                    >
                      {label}
                    </motion.div>
                  );
                } else {
                  return (
                    <motion.div variants={archiveFadeDown} className={styles.label} key={i}>
                      {label}
                    </motion.div>
                  );
                }
              })}
            </motion.div>

            <motion.div variants={archiveFadeDownContainer2} className={styles.projectcontainer}>
              {data.personalProjects.map((project, i) => {
                return (
                  <motion.div variants={archiveFadeDown} key={i} className={styles.project}>
                    <FiFolder fontSize={22} />

                    <p className={styles.date}>{project.date}</p>
                    <h1 className={styles.name}>{project.name}</h1>
                    <p className={styles.category}>App Store</p>

                    <div className={styles.technologies}>
                      {project.technologies.map((tech, i) => {
                        return <p key={i}>{tech}</p>;
                      })}
                    </div>

                    <div className={styles.link}>
                      {project.site && (
                        <a
                          href={project.site}
                          rel="noreferrer"
                          target="_blank"
                          className={isDark === "dark" ? styles.sitedark : styles.sitelight}
                        >
                          <FiExternalLink fontSize={22} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          rel="noreferrer"
                          target="_blank"
                          className={isDark === "dark" ? styles.githubdark : styles.githublight}
                        >
                          <FiGithub fontSize={22} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer dark={isDark === "dark"} links={false} />
      <ReturnHome isDark={isDark} />
      <Socials delay={false} isDark={isDark} />
    </div>
  );
};

export default Archive;
