import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/IntroVideo.module.css";

const FloatingVideo = ({ src, poster }) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartY = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video && !expanded) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, [expanded]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement;
      if (!isFullscreen && expanded) {
        handleClose();
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
    };
  }, [expanded]);

  const requestFullscreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitEnterFullscreen) {
      // iOS Safari fallback
      element.webkitEnterFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    }
  };

  const handleExpand = () => {
    setExpanded(true);
    setTimeout(() => {
      const video = videoRef.current;
      if (video) {
        video.muted = false;
        video.play().catch(() => {});
        requestFullscreen(video);
      }
    }, 200);
  };

  const handleClose = () => {
    setExpanded(false);
    const isFullscreen =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement;
    if (isFullscreen) {
      exitFullscreen();
    }
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      video.play().catch(() => {});
    }
  };

  const handleTouchStart = (e) => {
    if (expanded && isMobile) {
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e) => {
    if (!expanded || !isMobile || touchStartY.current === null) return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - touchStartY.current;
    if (diff > 80) {
      handleClose();
      touchStartY.current = null;
    }
  };

  const containerClass = expanded
    ? styles.expanded
    : isMobile
    ? styles.mobileCollapsed
    : styles.desktopCollapsed;

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        className={`${styles.videoContainer} ${containerClass}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          loop
          muted={!expanded}
          playsInline
          preload="auto"
          loading="eager"
          controls={expanded}
          onClick={!expanded ? handleExpand : undefined}
          className={styles.video}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: expanded ? "contain" : "cover",
            objectPosition: expanded ? "center" : "top",
            cursor: !expanded ? "pointer" : "default",
          }}
        />

        {expanded && !isMobile && (
          <button className={styles.closeBtn} onClick={handleClose}>
            ✕
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingVideo;