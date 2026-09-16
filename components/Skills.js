import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Skills.module.css";
import { HiOutlinePencil } from "react-icons/hi";
import { motion, useAnimation, useInView } from "framer-motion";
import { scrollRevealFadeUp, initialScrollRevealFadeUp } from "../utils/Animations";

const Skills = ({ dark }) => {
  const [increaseIcon, setIncreaseIcon] = useState(false);

  const skillsContainer = useRef(null);
  const isInView = useInView(skillsContainer);
  const animationControl = useAnimation();
  isInView ? animationControl.start(scrollRevealFadeUp) : "";

  const fontSize = increaseIcon ? 45 : 30;

  function checkMatch() {
    const x = window.matchMedia("(min-width: 600px)");
    if (!x.matches) {
      setIncreaseIcon(false);
    } else {
      setIncreaseIcon(true);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      checkMatch();
      const handle = () => checkMatch();
      window.addEventListener("resize", handle);
      return () => window.removeEventListener("resize", handle);
    }
  }, []);

  return (
    <motion.div
      id="skills"
      className={styles.container}
      initial={initialScrollRevealFadeUp}
      animate={animationControl}
      ref={skillsContainer}
    >
      <div className={styles.intro}>
        <div className={dark ? styles.icondark : styles.iconlight}>
          <HiOutlinePencil size={50} />
        </div>
        <h1 className={dark ? styles.titledark : styles.titlelight}>
          <span className={dark ? styles.numberdark : styles.numberlight}>02.</span>My Skills
        </h1>
      </div>
      <div className={styles.skills}>
        <div className={styles.frontandback}>

          {/* ── FRONTEND: slots 1–8 ── */}
          <div>
            {/* <p className={styles.text}>Frontend</p> */}
            <div className={dark ? styles.frontenddark : styles.frontendlight}>
              <div className={styles.toprow}>
                {/* 1. Flutter */}
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-flutter-plain colored"></i>
                  <p>Flutter</p>
                </div>
                {/* 2. Android */}
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-android-plain colored"></i>
                  <p>Android</p>
                </div>
                {/* 3. iOS */}
                <div className={styles.iconcontainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={fontSize}
                    height={fontSize}
                    viewBox="0 0 814.5 1000"
                    aria-label="iOS"
                  >
                    <path
                      fill={dark ? "#ffffff" : "#555555"}
                      d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.1 134.7-316.6 267.5-316.6 70.8 0 129.6 44.8 174.1 44.8 42.8 0 109.7-47.4 188.3-47.4 30.5 0 130.8 2.6 198.4 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"
                    />
                  </svg>
                  <p>iOS</p>
                </div>
                {/* 4. Dart */}
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-dart-plain colored"></i>
                  <p>Dart</p>
                </div>
              </div>
              <div className={styles.bottomrow}>
                {/* 5. Java */}
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-java-plain colored"></i>
                  <p>Java</p>
                </div>
                {/* 6. Express */}
                <div className={styles.iconcontainer}>
                  <i
                    style={{ fontSize, color: dark ? "#ffffff" : "#000000" }}
                    className="devicon-express-original"
                  ></i>
                  <p>Express</p>
                </div>
                {/* <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-react-original colored"></i>
                  <p>React.js</p>
                </div> */}
                {/* 7. Node.js */}
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-nodejs-plain colored"></i>
                  <p>Node.js</p>
                </div>
                {/* 8. Firebase */}
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-firebase-plain colored"></i>
                  <p>Firebase</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── BACKEND: slots 9–12 ── */}
          <div>
            {/* <p className={styles.text}>Backend</p> */}
            <div className={dark ? styles.backenddark : styles.backendlight}>
              <div className={styles.backtoprow}>
                {/* 9. GraphQL */}
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-graphql-plain colored"></i>
                  <p>GraphQL</p>
                </div>
                {/* 10. REST APIs */}
                <div className={styles.iconcontainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={fontSize}
                    height={fontSize}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={dark ? "#ffffff" : "#333333"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-label="REST APIs"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <p>REST APIs</p>
                </div>
              </div>
              <div className={styles.backbottomrow}>
                {/* 11. Hasura */}
                <div className={styles.iconcontainer}>
                  <svg
                    width={fontSize}
                    height={fontSize}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Hasura"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path d="M2.122.001a.393.393 0 0 0-.336.139C.448 1.725.034 6.02.724 8.172A4.54 4.54 0 0 1 .88 10.38c-.133.73-.269 1.612-.269 2.222C.611 18.895 5.712 24 12.001 24c6.29 0 11.388-5.102 11.388-11.399 0-.613-.133-1.493-.27-2.222a4.54 4.54 0 0 1 .157-2.207c.69-2.15.276-6.447-1.062-8.032a.405.405 0 0 0-.649.05l-1.649 2.59a1.268 1.268 0 0 1-1.693.275A11.325 11.325 0 0 0 12 1.203c-2.297 0-4.435.682-6.223 1.852a1.27 1.27 0 0 1-1.693-.276L2.434.19a.41.41 0 0 0-.312-.189zM12 3.805a8.835 8.835 0 0 1 8.82 8.824c-.004 4.864-3.959 8.823-8.82 8.823-4.861 0-8.816-3.959-8.816-8.824a8.836 8.836 0 0 1 5.048-7.976A8.73 8.73 0 0 1 12 3.805zM9.566 8.732a.254.254 0 0 0-.219.127.253.253 0 0 0 .003.255l1.848 3.111-2.482 3.787a.257.257 0 0 0-.011.26.252.252 0 0 0 .222.134h1.859a.258.258 0 0 0 .213-.116l1.341-2.098 1.202 2.086a.251.251 0 0 0 .22.128h1.832a.247.247 0 0 0 .219-.128.234.234 0 0 0 .006-.255l-2.253-3.908-1.933-3.259a.251.251 0 0 0-.22-.124z"/>
                  </svg>
                  <p>Hasura</p>
                </div>
                {/* 12. Supabase */}
                <div className={styles.iconcontainer}>
                  <svg
                    width={fontSize}
                    height={fontSize}
                    viewBox="0 0 109 113"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Supabase"
                  >
                    <defs>
                      <linearGradient id="sb1" x1="66.956%" x2="26.035%" y1="2.093%" y2="100%">
                        <stop offset="0%" stopColor="#249361" />
                        <stop offset="100%" stopColor="#3ECF8E" />
                      </linearGradient>
                      <linearGradient id="sb2" x1="0%" x2="50.021%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#000" stopOpacity=".17" />
                        <stop offset="100%" stopColor="#000" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#sb1)"
                      d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"
                    />
                    <path
                      fill="url(#sb2)"
                      d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"
                    />
                    <path
                      fill="#3ECF8E"
                      d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.666-15.875L45.317 2.071z"
                    />
                  </svg>
                  <p>Supabase</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.otherskillcontainer}>
          <p className={styles.othertext}>Other</p>
          <div className={dark ? styles.otherdark : styles.otherlight}>
            <div className={styles.iconcontainer}>
              <svg
                width={fontSize}
                height={fontSize}
                viewBox="0 0 200 300"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Figma"
              >
                <g transform="">
                  <path fill="#0acf83" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"/>
                  <path fill="#a259ff" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"/>
                  <path fill="#f24e1e" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"/>
                  <path fill="#ff7262" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"/>
                  <path fill="#1abcfe" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"/>
                </g>
              </svg>
              <p>Figma</p>
            </div>
            <div className={styles.iconcontainer}>
              <i style={{ fontSize }} className="devicon-git-plain colored"></i>
              <p>Git</p>
            </div>
            <div className={styles.iconcontainer}>
              <svg
                width={fontSize}
                height={fontSize}
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="GitHub"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
              <p>GitHub</p>
            </div>
            <div className={styles.iconcontainer}>
              <svg
                width={fontSize}
                height={fontSize}
                viewBox="0 0 2447.6 2452.5"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Slack"
              >
                <g clipRule="evenodd" fillRule="evenodd">
                  <path
                    d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                    fill="#36c5f0"
                  />
                  <path
                    d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                    fill="#2eb67d"
                  />
                  <path
                    d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                    fill="#ecb22e"
                  />
                  <path
                    d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                    fill="#e01e5a"
                  />
                </g>
              </svg>
              <p>Slack</p>
            </div>
            <div className={styles.iconcontainer}>
              <svg
                width={fontSize}
                height={fontSize}
                viewBox="0 0 54.8 65.8"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="ClickUp"
              >
                <defs>
                  <linearGradient id="SVGID_1_" x1="0" y1="15.0492" x2="54.8446" y2="15.0492" gradientTransform="matrix(1 0 0 -1 0 69.3604)">
                    <stop offset="0" stopColor="#8930FD" />
                    <stop offset="1" stopColor="#49CCF9" />
                  </linearGradient>
                  <linearGradient id="SVGID_2_" x1="1.1953" y1="53.166" x2="53.7447" y2="53.166" gradientTransform="matrix(1 0 0 -1 0 69.3604)">
                    <stop offset="0" stopColor="#FF02F0" />
                    <stop offset="1" stopColor="#FFC800" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#SVGID_1_)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0,50.6l10.1-7.8c5.4,7,11.1,10.3,17.4,10.3c6.3,0,11.9-3.2,17-10.2l10.3,7.6c-7.4,10-16.6,15.3-27.3,15.3C16.9,65.8,7.6,60.5,0,50.6z"
                />
                <path
                  fill="url(#SVGID_2_)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.5,16.9l-18,15.5l-8.3-9.7L27.6,0l26.2,22.7l-8.4,9.6L27.5,16.9z"
                />
              </svg>
              <p>ClickUp</p>
            </div>
            <div className={styles.iconcontainer}>
              <svg
                width={fontSize}
                height={fontSize}
                viewBox="0 0 150 150"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Google"
              >
                <g transform="scale(1.4) translate(-20,-20)">
                  <path
                    fill="#4280EF"
                    d="M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5
                    C115,101.8,120,90,120,76.1L120,76.1z"
                  />
                  <path
                    fill="#34A353"
                    d="M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9
                    L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z"
                  />
                  <path
                    fill="#F6B704"
                    d="M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z"
                  />
                  <path
                    fill="#E54335"
                    d="M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3
                    l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z"
                  />
                </g>
              </svg>
              <p>Google</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;