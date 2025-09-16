import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function FadeRight({ children, duration = 1.4, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { i18n } = useTranslation();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: i18n.language == "en" ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration, delay, ease: [0.6, -0.05, 0.01, 0.99] }}
      exit={{ opacity: 0, x: -50 }}
    >
      {children}
    </motion.div>
  );
}
