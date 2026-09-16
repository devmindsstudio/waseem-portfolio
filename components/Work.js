import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "../styles/Work.module.css";
import { CgBriefcase } from "react-icons/cg";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import {
  initialScrollRevealFadeUp,
  scrollRevealFadeUp,
  arrowHover,
  arrowTap,
} from "../utils/Animations";
import PortfolioLogos from "./PortfolioLogos";

const Work = ({ dark }) => {
  const workContainer = useRef(null);
  const isInView = useInView(workContainer);
  const animationControl = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      animationControl.start(scrollRevealFadeUp);
    }
  }, [isInView]);

  return (
    <motion.div
      id="work"
      className={styles.container}
      initial={initialScrollRevealFadeUp}
      animate={animationControl}
      ref={workContainer}
    >
      <div className={styles.intro}>
        <div className={dark ? styles.icondark : styles.iconlight}>
          <CgBriefcase size={50} />
        </div>
        <h1 className={dark ? styles.titledark : styles.titlelight}>
          <span className={dark ? styles.numberdark : styles.numberlight}>03.</span>What I&apos;ve
          Worked On
        </h1>
      </div>
      <div className={styles.allworkcontainer}>
        <div className={styles.row}>
          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <div className={styles.logo}>
              <PortfolioLogos.zonzon />
            </div>
            <p className={styles.projecttitle}>Zonzon</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                Neighborhood social app for residents share posts, organize events, create private groups, and discover local services.
              </p>
            </div>
            <Link href="/projects/zonzon">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
            <div className={styles.linkscontainer}>
              <a
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://apps.apple.com/us/app/zonzon/id1483530000"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink fontSize={22} />
              </a>
            </div>
          </div>
          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <div className={styles.logo}>
              <PortfolioLogos.outbackmarket />
            </div>
            <p className={styles.projecttitle}>Outback Marketplace</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                B2B wholesale marketplace for merchants product catalog, ordering, and order management; performance-tuned for large inventories.
              </p>
            </div>
            <Link href="/projects/outbackmarketplace">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
            <div className={styles.linkscontainer}>
              <a
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://play.google.com/store/apps/details?id=com.app.outback"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink fontSize={22} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <div className={styles.logo}>
              <PortfolioLogos.icmixdesign />
            </div>
            <p className={styles.projecttitle}>IC Mix Design</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                A fashion shopping app for browsing and purchasing clothing collections.
                I worked on UI implementation, API integration, and improving app performance for a smooth shopping experience.
              </p>
            </div>
            <Link href="/projects/icmixdesign">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
            <div className={styles.linkscontainer}>
              <a
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://apps.apple.com/pk/app/ic-mix-design/id6448994001"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink fontSize={22} />
              </a>
            </div>
          </div>

          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <div className={styles.logo}>
              <PortfolioLogos.skillresy />
            </div>
            <p className={styles.projecttitle}>SkillResy</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                A custom sports accessories e-commerce app with personalized product options.
                I contributed to building shopping flows, integrating APIs, and enhancing UI responsiveness.
              </p>
            </div>
            <Link href="/projects/skillresy">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
            <div className={styles.linkscontainer}>
              <a
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://apps.apple.com/my/app/skillresy/id6755155918"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink fontSize={22} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <div className={styles.logo}>
              <PortfolioLogos.reuniteme />
            </div>
            <p className={styles.projecttitle}>reUNITEme</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                A social platform for reconnecting and communication between users.
                I worked on real-time features, UI improvements, and enhancing overall user engagement.
              </p>
            </div>
            <Link href="/projects/reuniteme">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
            <div className={styles.linkscontainer}>
              <a
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://apps.apple.com/us/app/reuniteme/id6544793122"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink fontSize={22} />
              </a>
            </div>
          </div>

          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <div className={styles.logo}>
              <PortfolioLogos.eosvolt />
            </div>
            <p className={styles.projecttitle}>EOSVOLT</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                An EV charging management platform for drivers and operators.
                I built features for live charging sessions, payments, navigation, and system scalability.
              </p>
            </div>
            <Link href="/projects/eosvolt">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
            <div className={styles.linkscontainer}>
              <a
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://apps.apple.com/pk/app/eosvolt/id6467691034"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink fontSize={22} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.archivecontainer}>
          <Link href="/projects/zonzon" style={{ textDecoration: "none" }}>
            <div className={dark ? styles.archivebtndark : styles.archivebtnlight}>
              <h1 className={styles.archivetitle}>View Projects</h1>
              <AiOutlineFolderOpen fontSize={25} />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;