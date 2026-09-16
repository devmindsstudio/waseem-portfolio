import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Projects.module.css";
import Footer from "./Footer";
import ReturnHome from "./ReturnHome";
import Socials from "./Socials";
import Logo from "./Logo";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";
import dynamic from "next/dynamic";

const gsap = dynamic(() => import("gsap"), { ssr: false });

const Projects = ({
  projectData,
  handleBack,
  handleForward,
  isFirstProject,
  isLastProject,
}) => {
  const [isDark, setIsDark] = useState(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(window.localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import("gsap");

      if (contentRef.current && logoRef.current) {
        ctx = gsap.context(() => {
          const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

          tl.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.35, ease: "power1.out" }
          );

          gsap.set(contentRef.current, { opacity: 0, y: 25 });

          tl.to(contentRef.current, { opacity: 1, y: 0, duration: 0.45 }, "-=0.15");

          tl.fromTo(
            contentRef.current.querySelectorAll(`.${styles.img}, .${styles.section}`),
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.25"
          );
        });
      }
    })();

    return () => ctx && ctx.revert();
  }, [projectData]);

  if (!projectData) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>Project data not found</h1>
      </div>
    );
  }

  const {
    logo,
    name,
    githubLink,
    websiteLink,
    image,
    description,
    technologies,
    struggles,
    whatWouldIChange,
    futurePlans,
  } = projectData;

  return (
    <div
      className={isDark === "dark" ? styles.containerdark : styles.containerlight}
    >
      <div className={styles.zitrouscontainer}>
        <header className={styles.header}>
          <div className={styles.titlecontainer}>
            <div ref={logoRef} className={styles.logowrap}>
              <Logo animation={false} logo={logo} />
            </div>

            <h1 className={styles.title}>{name}</h1>

            {githubLink && (
              <a
                href={githubLink}
                rel="noreferrer"
                target="_blank"
                className={isDark === "dark" ? styles.linkdark : styles.linklight}
              >
                <FiGithub fontSize={25} />
              </a>
            )}

            {websiteLink && (
              <a
                href={websiteLink}
                rel="noreferrer"
                target="_blank"
                className={
                  isDark === "dark"
                    ? styles.externallinkdark
                    : styles.externallinklight
                }
              >
                <FiExternalLink fontSize={25} />
              </a>
            )}
          </div>

          <div className={styles.arrowcontainer}>
            <div
              onClick={handleBack}
              className={
                isFirstProject
                  ? `${styles.backdisabled} ${
                      isDark === "dark" ? styles.backdark : styles.backlight
                    }`
                  : isDark === "dark"
                  ? styles.backdark
                  : styles.backlight
              }
              aria-disabled={isFirstProject}
            >
              <BsArrowLeftShort fontSize={35} />
            </div>

            <div
              onClick={handleForward}
              className={
                isLastProject
                  ? `${styles.forwarddisabled} ${
                      isDark === "dark" ? styles.forwarddark : styles.forwardlight
                    }`
                  : isDark === "dark"
                  ? styles.forwarddark
                  : styles.forwardlight
              }
              aria-disabled={isLastProject}
            >
              <BsArrowRightShort fontSize={35} />
            </div>
          </div>
        </header>

        <main ref={contentRef} className={styles.main}>
          <div>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              layout="responsive"
              className={styles.img}
              priority
            />
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Description</h2>
            <p className={styles.text}>{description}</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Technologies</h2>
            <div className={styles.techcontainer}>
              {technologies.map((tech, i) => (
                <div
                  className={isDark === "dark" ? styles.techdark : styles.techlight}
                  key={i}
                >
                  {typeof tech.icon === "string" ? (
                    <i style={{ fontSize: 35 }} className={tech.icon}></i>
                  ) : (
                    tech.icon
                  )}
                  <p className={styles.techname}>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Struggles</h2>
            <p className={styles.text}>{struggles}</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>What would I change if I started over?</h2>
            <p className={styles.text}>{whatWouldIChange}</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Future Plans</h2>
            <p className={styles.text}>{futurePlans}</p>
          </div>
        </main>
      </div>

      <Footer dark={isDark === "dark"} links={false} />
      <ReturnHome isDark={isDark} />
      <Socials delay={false} isDark={isDark} />
    </div>
  );
};

export default Projects;