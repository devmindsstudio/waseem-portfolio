import React, { useRef } from "react";
import styles from "../styles/Contact.module.css";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { motion, useAnimation, useInView } from "framer-motion";
import { scrollRevealFadeUp, initialScrollRevealFadeUp } from "../utils/Animations";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

const Contact = ({ dark }) => {
  const contactContainer = useRef(null);
  const isInView = useInView(contactContainer);
  const animationControl = useAnimation();

  isInView ? animationControl.start(scrollRevealFadeUp) : "";

  return (
    <motion.div
      id="contact"
      className={styles.container}
      initial={initialScrollRevealFadeUp}
      animate={animationControl}
      ref={contactContainer}
    >
      <div className={styles.intro}>
        <div className={dark ? styles.icondark : styles.iconlight}>
          <HiOutlinePaperAirplane size={50} />
        </div>
        <h1 className={dark ? styles.titledark : styles.titlelight}>
          <span className={dark ? styles.numberdark : styles.numberlight}>04.</span>Contact Me
        </h1>
      </div>
      <div className={dark ? styles.contactcontainerdark : styles.contactcontainerlight}>
        <div className={styles.getintouch}>
          <h1 className={styles.h1}>Get in touch</h1>
          <p className={styles.message}>
            I would love to schedule a meeting and chat. I&apos;m open for freelancing and tech
            positions. Simply, send an email or fill out this form and I will get back to you as
            soon as possible. Thank you!
          </p>
          <div className={styles.emailcontainer}>
            <div className={dark ? styles.mailicondark : styles.mailiconlight}>
              <FiMail />
            </div>
            <p className={styles.email}>waseemkhaandev@gmail.com</p>
          </div>
          {/* <div className={styles.emailcontainer}>
            <div className={dark ? styles.mailicondark : styles.mailiconlight}>
              <FiMapPin />
            </div>
            <p className={styles.email}>House # 402, B-Block, Main Boulevard, NFC Housing Society, Lahore, Pakistan</p>
          </div> */}
        </div>
        <form
          className={styles.formcontainer}
          action="https://formsubmit.co/waseemkhaandev@gmail.com"
          method="POST"
        >
          <h1 className={styles.h1}>Send me a message</h1>
          <input
            type="hidden"
            name="_next"
            value={`http${process.env.NODE_ENV === "development" ? "" : "s"}://${
              process.env.NODE_ENV === "development"
                ? "localhost:3000"
                : "waseem---portfolio.vercel.app/"
            }/thanks`}
          />
          <input type="hidden" name="_subject" value="New message!" />
          <input type="hidden" name="_formsubmit_id" value="disable" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            className={styles.input}
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            className={styles.input}
            name="message"
            placeholder="Message"
            required
          />
          <button className={dark ? styles.btndark : styles.btnlight}>Send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;