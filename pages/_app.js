import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
        <SpeedInsights />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
